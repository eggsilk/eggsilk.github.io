"""Sentence-level diff of a site entry between two git commits, for the draft-vs-review corpus.

    python scripts/draft_diff.py src/content/tools/installation-blueprint.md <draft-commit> <review-commit>
    python scripts/draft_diff.py src/content/tools/installation-blueprint.md <draft-commit>            # review = working tree

Prints a Markdown block: every sentence of the draft labelled KEPT, CUT or REWRITTEN (with the
replacement), plus sentences the review ADDED. Paste the block into the corpus note and label the rule.
"""

import io
import re
import subprocess
import sys
from difflib import SequenceMatcher
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def body(text: str) -> str:
    parts = text.split("---", 2)
    return parts[2] if len(parts) == 3 else text


def sentences(md: str) -> list[str]:
    md = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", md)          # images out
    md = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", md)       # link text only
    text = " ".join(line.strip() for line in md.splitlines() if line.strip())
    out = re.split(r"(?<=[.!?])\s+(?=[A-ZÖÇÜİ\"“(])", text)
    return [s.strip() for s in out if s.strip()]


def at(path: str, ref: str | None) -> str:
    if ref is None:
        return (ROOT / path).read_text(encoding="utf-8")
    return subprocess.check_output(["git", "show", f"{ref}:notebook/{path}"], cwd=ROOT.parent, text=True, encoding="utf-8")


def similar(a: str, b: str) -> float:
    return SequenceMatcher(None, a.lower(), b.lower()).ratio()


def main():
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    path, draft_ref = sys.argv[1], sys.argv[2]
    review_ref = sys.argv[3] if len(sys.argv) > 3 else None
    d = sentences(body(at(path, draft_ref)))
    r = sentences(body(at(path, review_ref)))
    used = set()
    rows = []
    for s in d:
        best, score = None, 0.0
        for j, t in enumerate(r):
            if j in used:
                continue
            sc = similar(s, t)
            if sc > score:
                best, score = j, sc
        if score >= 0.97:
            used.add(best); rows.append(("KEPT", s, None))
        elif score >= 0.55:
            used.add(best); rows.append(("REWRITTEN", s, r[best]))
        else:
            rows.append(("CUT", s, None))
    added = [t for j, t in enumerate(r) if j not in used]
    print(f"## {path} · draft {draft_ref} → review {review_ref or 'working tree'}\n")
    counts = {k: sum(1 for x in rows if x[0] == k) for k in ("KEPT", "REWRITTEN", "CUT")}
    print(f"kept {counts['KEPT']} · rewritten {counts['REWRITTEN']} · cut {counts['CUT']} · added {len(added)}\n")
    for kind, s, t in rows:
        if kind == "KEPT":
            continue
        print(f"- **{kind}** — {s}")
        if t:
            print(f"  - → {t}")
        print("  - rule: ")
    for t in added:
        print(f"- **ADDED** — {t}\n  - rule: ")


if __name__ == "__main__":
    main()
