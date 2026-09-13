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

[Open the reference plant.](/blueprint/)

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
Clicking one opens the finding and the clause it is based on. The panel on
the left lists the monitoring plan by its required items, and clicking an
entry highlights that element on the drawing.

![The findings panel](/tools/blueprint/findings.png)

The drawing is generated from two documents. The first is the monitoring plan,
converted into a machine-readable model. The model includes the installation,
its production processes, the source streams, emission sources and process
units, the flows between them, and the instruments. The schema is modeled
after Annex II point A.5 of Implementing Regulation (EU) 2025/2547, which
specifies what a monitoring plan must contain. Every element on the drawing
carries its A.5 item and the sentence in the plan it came from. The conversion
is done by a language model, limited to the structure the plan describes, in
CBAM terms.

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

The reference plant is Örnek Çimento, a fictional Turkish clinker and cement
line, with these faults written into it on purpose. The tool has run on
nothing else so far. Cement is the only sector it draws.
