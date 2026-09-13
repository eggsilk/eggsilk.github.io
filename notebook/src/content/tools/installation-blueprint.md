---
id: T-001
kind: tool
title: Monitoring plan to blueprint translator
gloss: Takes the description of an installation in a CBAM monitoring plan and draws an interactive blueprint of it, with the data points that matter for embedded carbon marked on the drawing.
created: 2026-09-02
modified: 2026-09-13
status: in-development
href: /tools/installation-blueprint/
topics: [verification, monitoring plan, CBAM, tooling]
---

This simple tool takes the description of a plant / installation in a CBAM
monitoring plan and draws an interactive blueprint that demonstrates pertinent
datapoints and information regarding embedded carbon as defined by the EU
regulation.

![The reference plant drawn from its monitoring plan](/tools/blueprint/sheet.png)

The idea is to have the monitoring plan, and more importantly, the standard
communication template, exhibited in a legible format.

The drawing follows process flow diagram conventions. Equipment is drawn in
grey outline at its real height, so a preheater tower stands tall and a kiln
lies long and low. Source streams enter from the left, each with its stream
number and its meter. Carbon moves between units as ribbons. The width of a
ribbon is the amount of carbon. Colour is used only for carbon and for
problems. A stream the plan mentions but does not measure is hatched and
marked ND.

![Source streams entering the clinker line](/tools/blueprint/sources.png)

Where the carbon going into a unit does not match the carbon coming out, the
difference is drawn as its own ribbon, marked UNACCOUNTED.

![The kiln system, with the unaccounted carbon drawn as its own ribbon](/tools/blueprint/kiln.png)

Findings are numbered markers with a line to the element they concern.
Clicking one opens the finding and the clause it is based on.

![Two findings](/tools/blueprint/findings.png)

A second sheet shows the kiln system at drawing scale: the preheater cyclones,
the calciner, the kiln tube on its piers, the cooler, with the meters at the
points where they sit. Parts the plan does not describe, such as a bypass or
the split of fuel between the calciner and the main burner, are drawn dashed
and marked as not stated in the plan.

![Sheet 02, the kiln system](/tools/blueprint/sheet02.png)

The panel on the left has two tabs. The first is the monitoring plan, written
out item by item as Annex II point A.5 of Implementing Regulation (EU)
2025/2547 requires it, per production process, with the clause reference at
the foot of each section. The second is the reporting period, laid out as the
sheets of the communication template with the template's own row numbers, so
the figures an importer receives in the workbook can be read next to the
element of the drawing they belong to. Clicking an entry in either tab
highlights that element.

![The monitoring plan tab and the reporting period tab](/tools/blueprint/panel.png)

The drawing is generated from two documents. The first is the monitoring plan,
converted into a machine-readable model. The model includes the installation,
its production processes, the source streams, emission sources and process
units, the flows between them, and the instruments. The schema is modeled
after Annex II point A.5, which specifies what a monitoring plan must contain.
Every element on the drawing carries its A.5 item and the sentence in the plan
it came from. The conversion is done by a language model, limited to the
structure the plan describes, in CBAM terms.

The second document is the reporting period: one year's figures. It is laid
out as the sheets of the communication template, the Commission's Excel
workbook for passing an installation's data to importers. The period can be
exported into a blank template and imported back from a filled one.

With the plan loaded, the tool checks its structure. With a period loaded, it
also checks the figures. It flags source streams inside the boundary with no
measurement, residues carrying carbon out with no calculation, attribution
fractions that do not add up to one, zero-rated fuels with no demonstrated
biomass fraction, instruments past their calibration date, and units where the
carbon does not close.

This is for the three people who handle the same plant: the engineer at the
installation who fills in the communication template, the consultant who
prepares or checks it for the importer, and the verifier who has to confirm
it. All three work from the monitoring plan, and the plan describes the plant
in pages of prose and tables. Whether a stream is metered, where the sample is
taken, which production process a residue belongs to, whether the carbon
leaving a kiln is all accounted for: each of these is answered somewhere in
the document, and none of it can be seen. The reader rebuilds the plant in
their head, and each of the three rebuilds it differently.

The template adds a second version of the same plant, as rows of cells. A
figure in the workbook has a source stream behind it, an instrument behind
that, and a clause of the plan behind the instrument, and the workbook shows
none of that chain. A blank cell, a row with no plan entry behind it, a stream
the plan names but nobody measures: nothing in the workbook shows these until
someone checks it against the plan by hand.

The blueprint puts the plant in front of all three as one drawing. A gap is a
hatched stream with an ND mark on the drawing. Double
counting is a fraction that does not add up to one, marked on the element it
concerns. A workbook row sits next to the element it belongs to, and a row
that belongs to nothing is a finding. The engineer sees what the plan leaves
out before the verifier does, and the consultant and the verifier point at the
same picture.
