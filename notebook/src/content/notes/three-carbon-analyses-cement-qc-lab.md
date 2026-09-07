---
id: F-001
kind: finding
title: The three carbon analyses a cement plant's QC lab does not produce
gloss: XRF, XRD and a calorimeter control clinker quality and fuel value. None of them yields the biogenic fraction, the non-carbonate carbon, or the calcination degree of the dust that leaves the kiln, which are the three determinations a CBAM-grade figure turns on.
abstract: A cement plant's laboratory is built to control product and fuel value. None of those measurements yields the three numbers an emissions verifier needs. This note sets out each of the three carbon-specific analyses, the standard that closes it, and where the real uncertainty in a clinker determination sits.
created: 2026-07-03
modified: 2026-09-07
status: published
confidence: likely
topics: [cement, MRR, carbon analyses]
related: [embedded-emissions-determination-mrr]
sources:
  - label: Regulation (EU) 2018/2066 (Monitoring and Reporting Regulation), Articles 38 and 39; Annex II; Annex IV Section 9
    href: https://eur-lex.europa.eu/eli/reg_impl/2018/2066
  - label: EN ISO 13833, Stationary source emissions. Determination of the ratio of biomass (biogenic) and fossil-derived carbon dioxide. Radiocarbon sampling and determination
  - label: EN ISO 21644, Solid recovered fuels. Methods for the determination of biomass content (formerly EN 15440)
  - label: EN 13137, Characterization of waste. Determination of total organic carbon (TOC) in waste, sludges and sediments
  - label: DIN 19539, Investigation of solids. Temperature-dependent differentiation of total carbon (TOC400, ROC, TIC900)
  - label: ISO 10694, Soil quality. Determination of organic and total carbon after dry combustion
unverified:
  - The EN ISO 13833 expanded-uncertainty figures (10% for a biogenic fraction of 0.02 to 0.10; 5% from 0.1 to 1.0) are quoted from a secondary summary and are to be confirmed against the standard's text.
  - The MRR Annex IV Section 9 sub-tier structure for the dust term and the exact form of the calcination-degree formula are to be confirmed against the consolidated text.
---

A modern cement plant already owns most of the instruments that emissions monitoring requires. X-ray fluorescence (XRF) reads oxide chemistry, X-ray diffraction (XRD) resolves clinker phases, a bomb calorimeter fixes fuel calorific value, weigh feeders and a weighbridge track mass flows, and the laboratory runs loss-on-ignition and free lime. That kit exists to control *product* (clinker chemistry, cement strength) and *fuel value* (calories). Closing a *carbon* balance was never its purpose.

Three numbers decide a CBAM-grade emissions figure, and a plant's quality-control routine produces none of them directly. The first is the **biogenic fraction** of the fuel mix. The second is the **non-carbonate (organic) carbon** in the raw meal. The third is the **degree of calcination of the dust that leaves the kiln**. These are carbon-specific analyses that fall outside the quality-control routine. This note sets out each, together with the point where the real uncertainty sits.

## 1. Biogenic fraction of the fuel mix

Under the Monitoring and Reporting Regulation, the emission factor of qualifying biomass is zero.<sup class="sn-ref">1</sup><span class="sn" data-n="1">Reg. (EU) 2018/2066, Article 38. Sustainability conditions for the zero rating are in Article 38(5) and Article 39.</span> A co-processed fuel's effective emission factor is therefore its preliminary factor multiplied by the **fossil fraction** of its carbon. Every percentage point of biogenic carbon removes reportable fossil CO₂. With alternative fuels now supplying a large share of the kiln's thermal input, that split moves the reported figure well beyond a rounding term.

A calorimeter measures energy rather than carbon age, so the fossil-versus-biogenic split stays invisible to it. Radiocarbon resolves it. **EN ISO 13833** determines the biomass-derived fraction of stack CO₂ by the ¹⁴C method. Biogenic carbon carries the contemporary atmospheric ¹⁴C signature. Fossil carbon is millions of years old, its ¹⁴C long decayed, so it reads as effectively ¹⁴C-free. Measurement at the stack, integrated over hours to a month, averages out the bale-to-bale heterogeneity of waste-derived fuels that a single grab-sample cannot. The alternative, **EN ISO 21644** (formerly EN 15440), works on the solid fuel itself by ¹⁴C, selective dissolution, or manual sorting. The dissolution route misclassifies materials such as viscose (biogenic but synthetic) and nylon (fossil but biodegradable), which is why ¹⁴C remains the reference. Analysis runs in an ISO 17025-accredited radiocarbon laboratory. EN ISO 13833 states an expanded uncertainty of 10% where the biogenic fraction of the CO₂ lies between 0.02 and 0.10, tightening to 5% between 0.1 and 1.0.

## 2. Non-carbonate carbon in the raw meal

Raw meal carries carbon in two pools. The dominant one is carbonate, CaCO₃ and MgCO₃, which releases CO₂ on calcination. The second and smaller pool is **non-carbonate carbon**, the organic carbon (kerogen, bitumen) held in argillaceous or bituminous limestones and marls. It oxidises to CO₂ on heating, yet it stays invisible to both standard accounting routes. Combustion accounting misses it because it is not a metered fuel. Calcination accounting misses it because it is not a carbonate.

Annex IV of the MRR treats it as an additive process-emission term: mass of raw material × organic-carbon content × 3.664, the stoichiometric carbon-to-CO₂ factor.<sup class="sn-ref">2</sup><span class="sn" data-n="2">Reg. (EU) 2018/2066, Annex IV Section 9, the term for non-carbonate carbon in raw material. The 3.664 factor is 44.010 / 12.011.</span> The content is determined as total carbon minus total inorganic carbon. Total carbon is found by dry combustion on an elemental analyser, and inorganic (carbonate) carbon by acid liberation, under **EN 13137**, **DIN 19539** (which resolves the carbon species by ramped combustion), or **ISO 10694**. Where it goes unmeasured, the omission is silent, since no instrument flags its absence.

## 3. Calcination degree of the kiln dust

Calcination is the reaction the whole figure turns on: CaCO₃ → CaO + CO₂ (0.785 t CO₂ per tonne CaO), MgCO₃ → MgO + CO₂ (1.092 t CO₂ per tonne MgO). The MRR's Tier 1 default for clinker is 0.525 t CO₂ per tonne (Annex IV Section 9). At higher tiers, installation-specific factors follow from measured CaO and MgO.

The complication is the dust. Cement kiln dust and alkali-bypass dust leave the system already partly to fully calcined. That CO₂ is real, but the dust never becomes product, so an output-based calculation misses it. The MRR adds it back as a separate source, with a dust emission factor `EF_CKD = EF_Cli × d`, where *d* is the degree of calcination, the fraction of the raw meal's carbonate CO₂ already released. In practice *d* follows from paired loss-on-ignition measurements on the fresh raw meal and on the dust. Substituting a default for a measured *d* introduces a systematic bias. The paired LOI on the bleed stream is an emissions-accounting measurement rather than a QC routine, even though the plant lab can run LOI.

> The instruments report on product and fuel. They do not close a carbon balance. Three added analyses do.

## Where the uncertainty actually sits

The MRR sets the permitted uncertainty on activity data by tier: ±7.5%, ±5%, ±2.5%, ±1.5% from Tier 1 to Tier 4.<sup class="sn-ref">3</sup><span class="sn" data-n="3">Reg. (EU) 2018/2066, Annex II, Section 1, tier definitions for activity data of calculation-based methodologies.</span> The required tier rises with the installation's emissions category. The metering error on the weighbridge is rarely where the real uncertainty lives. It lives in four other places.

- **Sampling representativeness** of heterogeneous alternative fuels. The sub-sample sent for ¹⁴C analysis dominates total uncertainty far more than the feeder's metering error does. Integration of stack gas over time, per EN ISO 13833, moves that uncertainty onto a representative stream.
- **The biogenic split itself**, which at its stated uncertainty is often a larger error source than the carbonate term, because it is both large and variable.
- **Carbonate-source attribution.** XRF reports total clinker CaO, but the tier-compliant question is how much CaO entered the kiln *already decarbonated* (from slag or fly ash) and must be excluded from calcination CO₂.
- **The dust term**, where a default *d* stands in for paired LOI.

A tier-compliant determination decomposes total emissions into independently quantified terms: calcination, dust calcination, organic carbon, and biogenic correction. Each term carries its own tier and uncertainty, and the determination then propagates them. The competence lies in knowing which term carries the variance and directing the metrological effort there, well short of metering everything to ±1.5%.

---

Standards and methods are cited as they stand in the consolidated MRR and the named EN and ISO standards. Clause numbers still owed an accuracy pass are listed below. This note describes method, not a completed engagement.
