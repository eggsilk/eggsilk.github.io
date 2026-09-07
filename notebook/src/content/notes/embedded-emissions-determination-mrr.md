---
id: E-001
kind: explainer
title: How embedded emissions are determined under the EU MRR
gloss: The determination proceeds in four moves. Split the installation into source streams, choose a method for each, meter and analyse each to a required tier, then sum the terms and carry the uncertainty. Worked through the cement-clinker case at Annex IV Section 9.
abstract: The Monitoring and Reporting Regulation does not ask for one number. It asks for a determination, stream by stream, by a named method, at a required tier, with the uncertainty stated. This is the shape of that determination, worked through the cement-clinker case.
created: 2026-07-03
modified: 2026-09-07
status: published
confidence: likely
topics: [cement, MRR, method]
related: [three-carbon-analyses-cement-qc-lab]
sources:
  - label: Regulation (EU) 2018/2066 (Monitoring and Reporting Regulation), Articles 3, 12, 14, 24, 25, 38, 39; Annex I; Annex II; Annex IV Section 9
    href: https://eur-lex.europa.eu/eli/reg_impl/2018/2066
  - label: Implementing Regulation (EU) 2025/2547 on the calculation of embedded emissions under CBAM
unverified:
  - The mapping from the CBAM calculation rules in Implementing Regulation (EU) 2025/2547 back to the MRR's methodology is stated at the level of logic; the specific articles that make the reference are to be cited.
  - The MRR Annex IV Section 9 sub-tier structure for the conversion-factor and calcination-degree terms is to be confirmed against the consolidated text.
---

An importer using actual values under CBAM stands on a determination made at the installation to the EU Monitoring and Reporting Regulation.<sup class="sn-ref">1</sup><span class="sn" data-n="1">Reg. (EU) 2018/2066, the MRR. It predates CBAM and is the rulebook the EU Emissions Trading System already runs on.</span> The CBAM implementing rules for actual values point back to the same monitoring logic. Understanding that logic is the difference between a figure a verifier can accept and a number that reads as an estimate.

The determination proceeds in four moves. Split the installation into source streams. Choose a method for each. Meter and analyse each to a required tier. Then sum the terms and carry the uncertainty. This note walks the four, and closes on where a cement determination is won or lost.

## 1. The installation becomes source streams

The MRR does not treat a plant as a single emitter. It resolves it into **source streams**, the specific fuels and materials whose consumption or production gives rise to emissions (Article 3). A cement kiln has several: the raw meal that calcines, each fuel in the burn (coal, petcoke, and the alternative fuels now supplying much of the thermal input), the kiln dust that leaves the system, and the organic carbon carried in the raw material. Each stream is monitored in its own right.

The map of streams, the method chosen for each, and the tier applied are not left implicit. They are fixed in advance in the installation's **monitoring plan**,<sup class="sn-ref">2</sup><span class="sn" data-n="2">Reg. (EU) 2018/2066, Articles 12 and 14; required content in Annex I.</span> the document the whole determination is built to satisfy and the first thing a verifier reads. A determination whose monitoring plan does not already name a stream cannot recover it after the fact.

## 2. Each stream gets a method: standard or mass balance

The MRR offers two calculation-based routes, and the choice is made per stream rather than imposed across the installation. The **standard method** (Article 24) computes emissions as activity data multiplied by an emission factor, treating combustion and process emissions as separate terms. It is the natural fit for a fuel burned or a carbonate calcined. The **mass-balance method** (Article 25) instead tracks carbon in and carbon out across a defined boundary, taking emissions from the difference. It fits where carbon enters and leaves a process in several materials that are awkward to meter one by one.

For a cement kiln the standard method usually carries the load: the calcination term and the fuel terms are cleanly separable. What matters is that the method is a deliberate, documented choice for each stream, made where it is most defensible, and never a single technique stretched over the whole plant.

## 3. Each stream is metered to a tier, and the tier is earned

A method is only as good as the precision of what feeds it, and the MRR makes that precision explicit through **tiers**. A tier is a defined accuracy requirement on each input. For activity data, Annex II sets the maximum permissible uncertainty over a reporting period at **±7.5%, ±5%, ±2.5% and ±1.5%** from Tier 1 up to Tier 4, with a parallel structure governing the emission factors and composition data. The higher the tier, the tighter the tolerance the measurement must hold.

The required tier is not chosen for convenience. It rises with the installation's emissions category, so a large emitter is held to tighter tolerances on its main streams than a small one. A determination therefore has to show two things at once: that each stream is metered and analysed to a stated tier, and that the stated tier meets the one the regulation requires for a stream of that size. A figure quoted without its tier is a figure a verifier cannot place.

> The regulation never asks for a number on its own. It asks for a number, its method, its tier, and its uncertainty, together.

## 4. The terms are summed, and the uncertainty is carried

The installation's emissions are the sum of the stream terms, and the determination's uncertainty is propagated from theirs. This is where the discipline shows: the effort goes to the stream that carries the variance, not evenly across all of them. On a modern cement kiln that stream is rarely the weighbridge. It is the biogenic split of the alternative fuels, both large and variable, and the attribution of the carbonate source. Metering everything to ±1.5% is neither required nor useful. Directing the metrological effort to the term that dominates the budget is the actual competence.

## The cement-clinker case, at Annex IV Section 9

Cement is where these moves become concrete, because clinker production is dominated by *process* emissions, the CO₂ driven off when carbonates decompose, rather than by fuel. Annex IV Section 9 of the MRR governs it, and it turns on four terms.

- **Calcination.** The reaction the figure rests on: CaCO₃ → CaO + CO₂ (0.785 t CO₂ per tonne CaO) and MgCO₃ → MgO + CO₂ (1.092 per tonne MgO). At higher tiers the emission factor follows from the measured CaO and MgO actually calcined. Where an installation-specific factor is not yet available, the Tier 1 clinker default is **0.525 t CO₂ per tonne of clinker**.
- **Kiln dust.** Cement kiln dust and bypass dust leave the system already partly calcined, carrying real CO₂ that never becomes product. The MRR adds it back as its own source, with a dust emission factor `EF_CKD = EF_Cli × d`, where *d* is the degree of calcination of the dust. Substituting a default for a measured *d* introduces a systematic bias.
- **Fuel combustion, net of biomass.** The burn's fossil CO₂, with the biogenic fraction of the fuel zero-rated. The emission factor of qualifying biomass is zero (Articles 38 and 39), so a co-processed fuel is reported at its fossil fraction. Every point of biogenic carbon that goes undemonstrated is fossil CO₂ reported by default.
- **Non-carbonate carbon.** The organic carbon held in some limestones and marls oxidises to CO₂ on heating, yet it is neither a metered fuel nor a carbonate, so both standard routes miss it unless it is added as an explicit process term.

Three of those four terms depend on carbon-specific analyses a cement plant's quality-control laboratory does not run: the biogenic fraction, the non-carbonate carbon, and the dust's calcination degree. Which analyses close them, and where each standard sits, is the subject of F-001.

---

Article, annex and factor references are cited as they stand in the consolidated MRR. Clause numbers still owed an accuracy pass are listed below. This note describes method, not a completed engagement.
