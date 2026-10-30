# Archived New Shop Names and Records

Archived on 2026-10-31 at the founder's request. These names and their product, pricing, and label-stock rows are retired from active use. Use the approved AFTERSTORY collection names in current inventory summaries, production records, and counter planning.

## Historical Name Mapping

| Archived name | Recorded oil | Current AFTERSTORY reference | Existing batch IDs |
| --- | --- | --- | --- |
| CLEAN | CK One | FIRST LIGHT | CL-P01, CL-P02 |
| MUSK | Al Nuaim White Musk | WHITE MUSK | MK-P01, MK-P02 |
| EMBER | Perfume Cartel Bombshell | GOLDEN ORCHID | EM-P01; 2026-09-20 batch ID remains TBD |
| HIDE | Tobacco Vanilla | TOBACCO BLOOM | No recorded production |
| CROWN | Unconfirmed | Unmapped | No recorded production |

Mappings identify the fragrance reference. They do not assert that historical bottles carried AFTERSTORY labels, that batches are interchangeable, or that pending blends have been filled or released. Existing batch IDs remain unchanged for traceability. WHITE MUSK remains an approved AFTERSTORY name; the retired name is standalone MUSK.

## Archived Registers

- `PRODUCT_MASTER.csv`: the original five product rows and five label-product rows removed from the active product register.
- `PRICING_MASTER.csv`: the original five price rows. All are historical after this retirement, including rows whose preserved original Status field says ACTIVE. These prices are not approved prices for AFTERSTORY-branded products.
- `INVENTORY_MASTER.csv`: the original five label-stock rows. These are retired packaging balances at their original count dates, not current saleable packaging. Archiving is not disposal, consumption, or an inventory write-off. No physical quantity has been changed or transferred to another label SKU.

The existing `02_Inventory_Costing/INVENTORY_TRANSACTIONS.csv` remains unchanged as the historical movement ledger. Resolve its retired product IDs against the archived product register here. Current product IDs resolve against the active product register.

## Original Counter Sales Summary

The following rows preserve the original naming from `02_Inventory_Costing/COSTING.md` before current displays switched to the corresponding AFTERSTORY reference names. The source summary was dated 2026-09-21. Its original quantities, receipts, and prices are preserved here.

| Batch | Product | Quantity | Fulfilment | Payment | Selling price |
| --- | --- | ---: | --- | --- | ---: |
| CL-P01 | CLEAN 8 mL | 15 | Sold to New Shop | Received | INR 60/bottle; INR 900 total |
| MK-P01 | MUSK 8 mL | 15 | Sold to New Shop | Received | INR 60/bottle; INR 900 total |
| TBD | EMBER 8 mL | 5 | Sold to New Shop | Received | INR 60/bottle; INR 300 total |

Original pricing note: Historical New Shop Omaxe price note: INR 50 total, not INR 50 plus GST. This is superseded for current quoting by the founder-confirmed INR 60 New Shop price in `PRICING_MASTER.csv`.

That note described the former line before retirement. It no longer authorizes current quoting. Current approved prices, if set, belong in the active `02_Inventory_Costing/PRICING_MASTER.csv`.

Detailed batch formulas, dates, preparation status, and yields remain in the active `02_Inventory_Costing/PRODUCTION_AND_TESTING.md`, displayed under the current fragrance reference names. Original document wording is also recoverable from Git history before the archive commit (parent commit `b9b226a`).
