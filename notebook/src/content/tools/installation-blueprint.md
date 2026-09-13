---
id: T-001
kind: tool
title: Installation blueprint and audit engine
gloss: A CBAM monitoring plan drawn as the plant it describes, with source streams, meters and sample points on a process sheet, carbon as ribbons, and the plan's gaps marked on the drawing. Reads plan text in, exchanges data with the Commission's communication workbook.
created: 2026-09-02
modified: 2026-09-13
status: in-development
href: /tools/installation-blueprint/
topics: [verification, monitoring plan, CBAM, tooling]
---

A CBAM monitoring plan describes a plant in prose and tables: which fuels and
materials carry carbon, where each one is metered, where samples are taken, how
each emission is calculated. A verifier reading the plan has to reconstruct
that diagram before checking anything. This tool draws it, in the browser, with
the data behind every element one click away. [Open the reference plant.](/blueprint/)

The drawing is owed anyway. Implementing Regulation (EU) 2025/2547 lists, in
Annex II point A.5(13), among the minimum content of the plan "a suitable
diagram and process description of the installation including the system
boundaries of the installations and different production processes, providing
evidence that there is neither double counting nor data gaps in the emissions
of the installation". So the checks for double counting and data gaps run on
the drawing itself. Fifteen checks, each citing the clause of the regulation it
stands on.

The plant on the sheet is Örnek Çimento, a fictional Turkish clinker and cement
line I wrote for the purpose, with faults in it: a residue stream leaving the
kiln system without a calculation, a scrubbing limestone with attribution
factors summing to 1.20, an alternative fuel zero-rated on a biomass fraction
nobody has demonstrated, two weigh scales past their calibration date. The
engine reports ten findings on it. Around the kiln, 300 394 t of carbon go in
and 302 194 t come out, 1 800 t unaccounted, 0.6 per cent, drawn as its own
ribbon. It is the only plant the tool has run on, and cement is the only sector
it draws.

How the plant is drawn took most of the work. ISA-101, the standard for
process-control screens, reserves colour for the abnormal; here the equipment
is grey outline and colour is spent only on carbon and on findings. Equipment
sits at its true elevation, laid out by hand, a preheater tower tall, a kiln
long and inclined. Lines carry three weights, tags sit outside the symbol, and
every stream carries a number keyed to a table under the sheet, where its
determination method and clause live. Those are the conventions of ISO 10628,
the standard for process flow diagrams. Carbon runs as ribbons, width
proportional to tonnes; the ribbons do not balance by
construction, so a unit that does not close stays open on the sheet, its
difference marked UNACCOUNTED. A second sheet takes the kiln system to drawing
scale: preheater tower, calciner, kiln tube on its piers, grate cooler.

Everything on the sheet is what the plan states. A parameter the plan does not
give is drawn as a ghost and marked NOT STATED. The reference plan is silent on
whether the kiln has a bypass and on how the coal splits between the calciner
and the main burner; both show as such.

The plan comes in as text. A language model reads the monitoring plan and
writes the structural document, and every element on the sheet carries the
A.5 item and the sentence of the plan it came from, shown on click. The test is
a round trip: the reference plan is translated with the hand-built model hidden
from the translator, and the two are compared on stream and instrument names.
Every mismatch on the way to passing was a place where the plan document
disagreed with itself, a stream table it referred to and did not contain, two
laboratory instruments with no tags.

The plan and the reporting period are separate documents. The plan says how
every value is determined and never the value. The period holds one year's
figures, laid out by the sheets and columns of the communication template the
Commission publishes for operators to pass their data to importers, version
2.1.1. The period exports into a blank copy of the template and imports back
from a filled one. Excel recalculates the workbook, and the template's own
specific embedded emissions differ from the sheet's by 0.0005 tCO2e per tonne.
A workbook row that matches nothing in the plan comes through as a finding.

Open: the translator does not yet read the parameters the kiln sheet needs, so
a translated plan shows more ghosts than the hand-built one. A diff between a
plan-derived model and a loaded one, mismatches as findings, is the next build.
A real monitoring plan will break something.
