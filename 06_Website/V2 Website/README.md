# AFTERSTORY V2 website handoff

Prepared 2026-09-23 and updated after local V2 implementation. This folder contains the V2 application and its implementation references; it is not a deployed or approved replacement for the current live site. The live source remains in `../../afterstory-site/`; its route map is `../../afterstory-site/PROJECT_MAP.md`.

## What is here

| File or folder | Purpose |
| --- | --- |
| `stitch-source/manifest.json` | Stitch project and screen IDs, original download URLs, local file paths, and project theme metadata. |
| `stitch-source/DESIGN.md` | Design system exported from the Stitch project. This is concept guidance, subject to the canonical brand rules. |
| `stitch-source/code/` | Original HTML/SVG files from Stitch, unedited. The prototype HTML duplicates the mobile homepage HTML exactly. |
| `stitch-source/previews/` | Full-resolution screen images where Stitch supplied them, plus the logo and a concept photograph. Stitch did not supply a separate prototype preview. |
| `stitch-source/assets/` and `asset-manifest.json` | Local copies of the 19 Google-hosted images referenced by the HTML, mapped back to their source URLs and screens. The HTML still points to the source URLs. |
| `V2_REQUIREMENTS.md` | Active V2 scope, storefront rules, release controls, and quality requirements. |
| `TASK_QUEUE.md` | Current V2 execution status, dependencies, and blockers. |
| `99_Archive/Website_Documentation_Consolidation/` | Superseded brief, production plan, and Stitch audit retained for recovery only. |

Stitch project: [AFTERSTORY Fragrance Storefront Concept](https://stitch.withgoogle.com/projects/18236276433058826667). The requested checkout screen is `cf79ab35335b4e678931a66550bc811f`.

## Source precedence

The files under `stitch-source/` are **reference material**, not approved customer copy, product photography, legal policy, or working checkout code. For names, chapter order, stories, concentration, and launch selection, use `../../01_Brand_Records/MASTER_SPEC.md` and `../../01_Brand_Records/BRAND_PRINCIPLES.md`. For web prices and sale eligibility, use `../../02_Inventory_Costing/PRICING_MASTER.csv` and `PRODUCT_MASTER.csv`. Consult the inventory master at implementation time for actual sellable stock. Current website content in `../../afterstory-site/content/` is a separate implementation snapshot and does not override those canonical records.

The Stitch project shows a **mobile** homepage, collection, Tobacco Bloom product page, and cart/checkout. It also has a logo mark, concept photograph, and prototype item. It does **not** provide a complete desktop set or a functioning commerce backend. Treat its code as a visual reference and interaction sketch.

No API key or credential is stored in this folder.
