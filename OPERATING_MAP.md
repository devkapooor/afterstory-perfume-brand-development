# AFTERSTORY Operating Map

Read this only when a request needs project routing. Then open the smallest listed canonical source. Do not scan folders, archives, images, PDFs, dependencies, or generated output unless the task needs them.

## Current State

The brand and 13-chapter collection are locked. Inventory, products, prices, purchases, suppliers, and expenses use canonical CSV registers. Current 50 mL sticker artwork is finalized for the present batch; branded 8 mL label print approval remains pending.

## Task Routing

| Topic | Canonical source or route |
| --- | --- |
| Brand, chapters, stories, typography, colour, packaging direction | `01_Brand_Records/BRAND_SYSTEM.md` |
| Communication style | `01_Brand_Records/COMMUNICATION_GUIDE.md` |
| Social visual direction | `01_Brand_Records/AFTERSTORY_Instagram_Visual_Style_Master.md` |
| Label geometry | `01_Brand_Records/LABEL_PRODUCTION_SPEC.md` |
| Label artwork approval | `01_Brand_Records/ARTWORK_STATUS.md`; selected asset folder |
| Internal fragrance mapping | `01_Brand_Records/fragrance_reference_map.md` |
| Inventory / raw materials | `02_Inventory_Costing/INVENTORY_MASTER.csv` |
| Production, waste, sales, samples, or stock movements | `02_Inventory_Costing/PRODUCT_MASTER.csv`, `INVENTORY_TRANSACTIONS.csv`, then `INVENTORY_MASTER.csv` |
| Product IDs / SKUs | `02_Inventory_Costing/PRODUCT_MASTER.csv` |
| Costing / COGS | `02_Inventory_Costing/COSTING.md` |
| Approved prices | `02_Inventory_Costing/PRICING_MASTER.csv` |
| Purchases / suppliers / expenses | `02_Inventory_Costing/PURCHASES.csv`, `SUPPLIER_MASTER.csv`, or `EXPENSES.csv` |
| Batches, testing, yield, fill weights, or production-route research | `02_Inventory_Costing/PRODUCTION_AND_TESTING.md` |
| Print-ready labels and generated artwork | `04_Generated_Images/ASSET_CATALOG.csv` and the selected asset folder |
| Invoice or receipt evidence | `05_Invoices_Receipts/` |
| Live V1 website | `afterstory-site/PROJECT_MAP.md`; then its `content/`, `components/`, `app/`, or selected `public/` asset |
| Isolated V2 website | `06_Website/V2 Website/README.md`, `V2_REQUIREMENTS.md`, and `TASK_QUEUE.md` |
| Historical or superseded evidence | `99_Archive/` only when current records lack required evidence or history is requested |

## Open Verification

**Physical raw-material balance:** the Zaveri Gucci Flora lot has a historical 12.5 mL use without mass conversion; the Perfume Cartel Bombshell lot has a 30 mL GOLDEN ORCHID use and an unmeasured EMBER use. Neither has a measured current balance. Physically weigh each remaining lot before its next batch; do not promise output from those lots until then.

## Working Boundaries

- `99_Archive` is historical, not routine business authority.
- Do not infer current stock, prices, production quantities, or release status from Markdown summaries; use the named canonical source.
- V1 remains the live website until V2 has passed preview verification and receives an explicit release decision.
- Private banking records remain Git-ignored and are never routine lookup material.
