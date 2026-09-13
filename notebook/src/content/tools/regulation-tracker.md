---
id: T-003
kind: tool
title: Carbon regulation tracker
gloss: Checks twice a week whether the CBAM and ETS regulations have a newer consolidated text, whether new acts cite them, whether the Commission has published new guidance, and whether Turkey's Official Gazette carries climate legislation. Findings arrive as commits.
created: 2026-09-13
status: in-development
href: /tools/regulation-tracker/
topics: [CBAM, ETS, regulation, tooling]
---

This tool checks twice a week, on Monday and Thursday mornings, whether the
regulations behind the atlas have changed. It looks for a newer consolidated
text of any tracked act on EUR-Lex, for a new EU act citing the CBAM
regulation or the ETS Directive, for a new document on the Commission's CBAM
pages, for climate legislation in that morning's Resmî Gazete, and for a new
edition of the World Bank's carbon-pricing data. Anything new arrives as a
commit in the repository that holds the regulation corpus.

I built it because the regulations change without notice. The default-values
regulation, Implementing Regulation (EU) 2025/2621, was adopted in December
2025, amended with effect from 1 January 2026, and had its annexes, the
default-value tables themselves, corrected in July 2026. A verifier who
downloaded the PDF in spring cites a table that no longer applies. Guidance
has the same problem from the other side. The Commission's documents for
operators and verifiers are published on its own web pages and never appear
on EUR-Lex, so watching the law alone misses the documents people actually
work from.

The tool has no screen. Each run writes a report and commits it under a
message such as "watch: 1 new finding(s) 2026-09-08". A finding is one line:
which act, which consolidated version the corpus holds, which version EUR-Lex
now lists. The first run reports everything it can see, including every act
that has ever cited the ETS Directive and is not in the corpus, once. From
then on it remembers what it has reported and lists only what is new.

The checks run against public sources. For consolidations it reads each
act's overview page on EUR-Lex and compares the newest consolidated version
listed there with the one in the corpus. For new acts it queries the EU
publications office, which publishes the citation links between acts as
machine-readable data, for anything citing Regulation (EU) 2023/956 or
Directive 2003/87/EC that the corpus does not track. For Turkey it reads that
day's Official Gazette index and looks for climate, emissions, carbon, SKDM
and greenhouse gas. For guidance it lists the document and news links on two
Commission CBAM pages and reports the ones it has not seen before. For the
World Bank it looks for the data file linked on the dashboard's about page. A
check that fails does not stop the others. A source that answers with an
empty page, which EUR-Lex does to scripts, is reported as an error and not as
nothing new. After the checks, the corpus is refreshed and the database behind
the atlas is rebuilt.

So far it has caught the consolidation of the default-values regulation while
the corpus still held the base act, a later consolidation of the
transitional-period reporting regulation, acts adopted in 2026 that cite the
CBAM regulation and were not in the corpus, the Commission's August guidance
for installation operators outside the EU and for verifiers and accreditation
bodies, the World Bank's May 2026 data edition, and, on its first morning,
Turkey's ratification decisions with the UNFCCC in the Official Gazette. It
watches citations of the two basic acts only, so the July correction to the
default-value annexes came in through the atlas's relation harvest instead.

This is for anyone who cites these regulations in their work: the verifier
writing a finding against a clause, the consultant preparing an importer's
declaration from the default values, the engineer filling in the
communication template under the version of the rules they were given. All
of them work from a downloaded copy of the text, and nothing in the copy
shows that the text has changed. The tables an importer falls back on changed
twice in eight months. The tracker says which act moved and to which version,
as a dated line in a repository, before the text is cited again.
