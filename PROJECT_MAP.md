# AFTERSTORY Project Map

Read `CONTEXT.md` first. Use this map only when the route needs clarification.

## Source-of-Truth Registry

| Business Area | Canonical Source | Status |
| --- | --- | --- |
| Inventory | `02_Inventory_Costing/INVENTORY_MASTER.csv` | ACTIVE |
| Products | `02_Inventory_Costing/PRODUCT_MASTER.csv` | ACTIVE |
| Costing | `02_Inventory_Costing/COSTING.md` | ACTIVE |
| Pricing | `02_Inventory_Costing/PRICING_MASTER.csv` | ACTIVE |
| Fragrances | `01_Brand_Records/BRAND_SYSTEM.md` | ACTIVE |
| Packaging | `01_Brand_Records/LABEL_PRODUCTION_SPEC.md` | ACTIVE |
| Brand | `01_Brand_Records/BRAND_SYSTEM.md` | ACTIVE |
| Decisions | `01_Brand_Records/BRAND_SYSTEM.md` | ACTIVE |
| Website | `afterstory-site/` | ACTIVE |

## Business Records

| Path | Purpose | Authority | Read when |
| --- | --- | --- | --- |
| `01_Brand_Records/BRAND_SYSTEM.md` | Locked identity, collection, visual system, packaging direction, and terminology | CANONICAL | Brand, fragrance, chapter, design, or lock questions |
| `01_Brand_Records/COMMUNICATION_GUIDE.md` | Approved reusable brand communication rules | CANONICAL | Customer, retailer, or brand-facing communication |
| `01_Brand_Records/LABEL_PRODUCTION_SPEC.md` | Label dimensions and technical requirements | CANONICAL | Label or packaging work |
| `01_Brand_Records/ARTWORK_STATUS.md` | Artwork approval status | CANONICAL | Artwork or label-release questions |
| `01_Brand_Records/fragrance_reference_map.md` | Internal fragrance mapping and notes | SUPPORTING | Internal scent/source questions |
| `02_Inventory_Costing/PRODUCT_MASTER.csv` | Product, pack, raw-material, and packaging identifiers | CANONICAL | Identifying an item before operational updates |
| `02_Inventory_Costing/INVENTORY_MASTER.csv` | Current finished-goods, material, and packaging stock | CANONICAL | Any current-stock question |
| `02_Inventory_Costing/INVENTORY_TRANSACTIONS.csv` | Stock movements from the 2026-09-22 opening position | CANONICAL | Recording production, sale, waste, purchase, or adjustment |
| `02_Inventory_Costing/PRICING_MASTER.csv` | Approved public, retailer, and friend-and-family prices | CANONICAL | Quote, MRP, or price-change question |
| `02_Inventory_Costing/SUPPLIER_MASTER.csv` | Supplier identities and source evidence | CANONICAL | Supplier question or purchase entry |
| `02_Inventory_Costing/PURCHASES.csv` | Structured purchase history | CANONICAL | Purchase or landed-cost source question |
| `02_Inventory_Costing/EXPENSES.csv` | Recorded operating expenses | CANONICAL | Expense or session-cost question |
| `99_Archive/Inventory_Old/INVENTORY.md` | Detailed pre-consolidation stock and purchase history | HISTORICAL | Reconciling a row marked unresolved |
| `02_Inventory_Costing/PRODUCTION_AND_TESTING.md` | Batch, testing, fill-weight calibration, and production-route research | CANONICAL | Batch, sample, test, release, production measurement, or compliance questions |
| `02_Inventory_Costing/COSTING.md` | Costing and commercial assumptions | CANONICAL | COGS and margin questions; pricing master controls approved prices |
| `03_Label_Files/50ml_Final_Sticker_PNGs_Bulk_1/` | Current 50 ml label PNG assets | GENERATED | Printing or visual review |
| `04_Generated_Images/ASSET_CATALOG.csv` | Current label and generated-asset routing | SUPPORTING | Locating approved, reference, or historical artwork |
| `05_Invoices_Receipts/` | Original supplier invoices and receipts | CANONICAL | Verifying a purchase document |
| `06_Website/README.md` | Pointer to website workspace | SUPPORTING | Website routing only |
| `afterstory-site/PROJECT_MAP.md` | Website-specific routing | APPLICATION | Any website change |
| `afterstory-site/content/` | Editable site and shop content | APPLICATION | Copy, price, product, or metadata changes |
| `afterstory-site/components/`, `app/`, `public/` | Website UI and assets | APPLICATION | Layout, feature, or selected-asset changes |
| `99_Archive/` | Superseded/historical material | HISTORICAL | Only for requested history, missing evidence, derivation tracing, or recovery |

## Large or Generated Areas

`afterstory-site/node_modules`, build outputs, caches, PDFs, and the image library are not routine reading targets. Inspect only the precise area required for a task.
