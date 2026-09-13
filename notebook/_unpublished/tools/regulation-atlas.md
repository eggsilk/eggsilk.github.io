---
id: T-002
kind: tool
title: Carbon regulation atlas
gloss: Every carbon-pricing instrument worldwide with its governing documents and cross-border relations, self-updating from primary law and directory data. Statuses carry legal-mandate strength; claims without a citable source do not render.
created: 2026-09-09
status: in-development
href: /tools/regulation-atlas/
topics: [CBAM, ETS, regulation, tooling]
---

The atlas is a map of carbon-pricing regulation: 141 instruments across 119
jurisdictions — 68 emissions trading systems, 70 carbon taxes, 3 border
mechanisms — each with its status, its governing documents, and its relations
to the others. [Open the atlas.](../../atlas/)

I audit emissions data under two of these regimes. The question "does this
country have a carbon price, and under which law" comes up constantly in that
work, and from 2027 it turns into money: an EU importer can deduct a carbon
price effectively paid in the country of origin. I wanted an answer I could
check, so I built the reference I was missing.

Most of the work went into the statuses. Directories run a three-state
vocabulary: under consideration, under development, implemented. The law is
finer than that. Turkey's Climate Law mandates an ETS with a pilot phase, and
the pilot has not begun; the same law merely enables a border mechanism ("may
be established", procedures left to the Trade Ministry). The UK's CBAM is
enacted in the Finance Act 2026 and charges nothing until 1 January 2027. The
atlas gives each of these its own state and cites the article it stands on.
Where a directory and the law disagree, the finer source wins and the
disagreement is kept: the World Bank has Türkiye's ETS "under development",
the statute says pilot mandated.

The second rule cost some content. A claim without a citable source does not
render. I believe Turkey's ETS is modeled on the EU's; no source in the
repository says so yet, so that edge sits unpublished in the database until
one does.

No directory lists border mechanisms. The World Bank dashboard covers taxes
and trading systems, ICAP trading systems only. The three CBAMs in the atlas
are curated by hand from primary law.

For the regimes I work in, the reference runs deeper. The EU CBAM page
carries all sixteen governing documents, the amendment on the basic act, its
four corrigenda, and the two Commission proposals pending against it, pulled
from the EU publications office's metadata — where the whole regulatory web
is machine-readable once you learn that an "implements" relation does not
exist and the tree hangs on legal basis instead.

The atlas rebuilds itself. Twice a week a watcher checks the publications
office for new acts citing the basic regulations, the consolidation record of
every tracked act, that morning's Resmî Gazete for Turkish climate law, the
Commission's CBAM pages for new guidance, and the World Bank for new data
editions. Findings arrive as commits. The first run caught the default-values
regulation holding a newer consolidated text than the repository had; the
relation harvest later found the same act's annexes corrected again in July.
Two revisions in eight months, to the tables importers fall back on.

For prices, coverage shares and system design, the World Bank dashboard and
ICAP's factsheets are the places to go; the atlas links out rather than
repeating them. What it adds is the legal layer: which documents, which
states, who connects to whom, with a source on every claim.

136 of the world's instruments still carry "governing legislation not yet
mapped", and each page says so rather than hiding it. If the watcher dies and
stays dead, the atlas comes down. A stale map is worse than none.
