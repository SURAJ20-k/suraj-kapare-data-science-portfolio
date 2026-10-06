# Source and editorial notes

The portfolio was prepared from these supplied PDFs:

1. `Suraj_R_Kapare_Data_Scientist_Resume.pdf`
2. `Suraj_R_Kapare_Data_Analyst_Resume.pdf`
3. `Profile (5).pdf`

The supplied LinkedIn URL is used as a contact destination. Live LinkedIn content was not available during preparation; the attached profile export is the source for its content.

## Classification

**Data Scientist, junior / early career.** The strongest common thread is analysis and modeling: customer segmentation, supervised classification, interpretable visual analysis, and cloud sentiment inference. The AWS project also demonstrates engineering breadth, but does not by itself justify a mid-level or senior engineering classification.

## Evidence retained

| Claim | Source | Presentation |
| --- | --- | --- |
| 129K+ passenger survey records | Both résumés | Project scale, not a production user count |
| 96% LightGBM and 88% logistic regression accuracy | Both résumés | Reported project accuracy; no unsupported confidence interval |
| Five-fold cross-validation | Both résumés | Evaluation method; no claim that the quoted accuracies are held-out test or averaged CV scores |
| 8 percentage-point difference | Arithmetic from the two stated accuracies | Absolute percentage-point difference, not an 8% relative improvement |
| 800 images; 15 properties | Both résumés | Kept as total images without narrowing the entire sample to urban images |
| NIMA standard deviation 0.246; human ratings 1.598 | Both résumés | Describes score variation, not a comparable model accuracy metric |
| Claude, SAM, regression | Both résumés | Interpretable feature analysis; not a claim of causal inference |
| Three sentiment categories | Data scientist résumé | Positive, neutral, negative |
| AWS S3, Lambda, SageMaker, API Gateway | Data scientist résumé | Cloud project architecture; no latency, throughput, or cost claims |
| 3,900 records; 2,518 repeat non-subscribers | Both résumés | Analytical finding and potential outreach segment; no revenue or conversion result |
| 1,654 outbreaks across 560 counties | Data analyst résumé | Additional analytical work; temporal association with egg prices, not causation |
| M.S. Data Science, 3.64 GPA, May 2026 | Both résumés | Completed education |
| B.E. Mechanical Engineering, 2018–2022 | Both résumés | Engineering foundation |
| Propulsion team, Sep 2020–Aug 2021 | LinkedIn PDF | Explicitly identified as university team experience |
| Two associate certifications | LinkedIn PDF | Certification titles only; no unsupported issue dates, issuer labels, or verification links |

## Editorial decisions

- Rewrote the public copy and removed duplicated résumé/profile statements.
- Used “Suraj Kapare” in the interface and the full name in document metadata and the footer.
- Selected the personal email from the résumés as the primary contact. The profile’s university email is not needed as a duplicate channel. The phone number remains in the supplied résumé downloads.
- Kept internships distinct from academic projects and university team experience.
- Described project work as team contributions rather than asserting sole ownership.
- Omitted the résumé’s ambiguous phrase “96% accuracy and ROC-AUC.” Only the explicitly supported accuracy figure is visualized.
- Avoided adding “realistic” but unverified metrics. Credible evidence is more useful to recruiters than fabricated precision.
- Did not add employer logos, photographs, testimonials, GitHub usernames, project URLs, awards, or live services that were not supplied.
- The capstone discussion describes a shift away from NIMA’s narrow score distribution toward Claude-based property analysis. It does not claim a measured performance gain from that shift.
- Charts and project diagrams are HTML/CSS with textual equivalents. There are no simulated scatterplots or invented observations.
- Scope notes explain which outcomes were measured and what the projects do not establish.

## Maintenance

Update the website copy and downloadable PDFs together when new evidence, role details, project ownership, or validated results become available. Keep the source notes synchronized with any new metrics.
