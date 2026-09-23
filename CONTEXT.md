# AFTERSTORY

Small-batch fragrance brand: products, packaging, inventory, orders, and website are managed locally.

## Current State

Brand and 13-chapter collection are locked. Current inventory, product identifiers, pricing, purchases, suppliers, and expenses use small canonical CSV registers. 50 ml label artwork is current; 8 ml branded-label finalization remains pending.

## Task Routing

| Topic | Canonical source or route |
| --- | --- |
| Inventory / current stock | `02_Inventory_Costing/INVENTORY_MASTER.csv` |
| Inventory transactions / waste / production | `02_Inventory_Costing/INVENTORY_TRANSACTIONS.csv`, then `INVENTORY_MASTER.csv` |
| Products / SKUs | `02_Inventory_Costing/PRODUCT_MASTER.csv` |
| Costing / COGS | `02_Inventory_Costing/COSTING.md` |
| Pricing / MRP / wholesale / retailer | `02_Inventory_Costing/PRICING_MASTER.csv` |
| Fragrances, chapters, stories | `01_Brand_Records/BRAND_SYSTEM.md` |
| Fragrance notes / internal reference mapping | `01_Brand_Records/fragrance_reference_map.md` |
| Packaging specifications | `01_Brand_Records/LABEL_PRODUCTION_SPEC.md` |
| Labels / artwork approval | `01_Brand_Records/ARTWORK_STATUS.md`; assets in `03_Label_Files/` |
| Brand identity / locked decisions | `01_Brand_Records/BRAND_SYSTEM.md` |
| Brand-facing communication | `01_Brand_Records/COMMUNICATION_GUIDE.md` |
| Purchases | `02_Inventory_Costing/PURCHASES.csv` |
| Suppliers | `02_Inventory_Costing/SUPPLIER_MASTER.csv` |
| Raw materials | `02_Inventory_Costing/INVENTORY_MASTER.csv` |
| Invoices / receipts | `05_Invoices_Receipts/` |
| Expenses | `02_Inventory_Costing/EXPENSES.csv` |
| Batch testing / yield / fill weights / production-route research | `02_Inventory_Costing/PRODUCTION_AND_TESTING.md` |
| Generated artwork / label assets | `04_Generated_Images/ASSET_CATALOG.csv` and required asset folder |
| Website / application | `afterstory-site/PROJECT_MAP.md`; source in `afterstory-site/content/`, `components/`, `app/` |
| Historical / superseded records | `99_Archive/` only when specifically needed |
