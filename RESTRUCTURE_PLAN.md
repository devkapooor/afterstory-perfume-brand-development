# AFTERSTORY Planned Project Structure

Status: Planning only. No move, deletion, or archive action is authorised by this document.

## Design Rules

- One canonical source per business fact.
- Daily work opens one small packet, not a whole department or repository.
- History is retained only where it supports accounting, traceability, product safety, or recovery.
- Private banking information stays local, Git-ignored, and outside routine searches.
- Website source, functions, assets, and reference designs remain distinct.

## Target Hierarchy

```text
Perfume Brand Development/
  00_Control/
    AGENTS.md
    OPERATING_MAP.md
    WORK_PACKS.md

  01_Brand_System/
    Core/
      BRAND_SYSTEM.md
    Collection/
      FRAGRANCE_MASTER.md
      fragrance_reference_map.md
    Packaging/
      LABEL_PRODUCTION_SPEC.md
      ARTWORK_STATUS.md
    Communication/
      COMMUNICATION_GUIDE.md
      SOCIAL_VISUAL_GUIDE.md

  02_Operations/
    Masters/
      PRODUCT_MASTER.csv
      PRICING_MASTER.csv
      SUPPLIER_MASTER.csv
    Inventory/
      INVENTORY_MASTER.csv
      INVENTORY_TRANSACTIONS.csv
    Production/
      PRODUCTION_RUNBOOK.md
      PRODUCTION_AND_TESTING.md
    Costing/
      COSTING.md
    Sales/
      SALES_AND_RECEIVABLES.csv

  03_Finance/
    Purchases/
      PURCHASES.csv
      Invoices/
    Expenses/
      EXPENSES.csv
    Banking_Private/
      README.md
      ACCOUNT_DETAILS.md
      Current_Account_QR.jpeg

  04_Assets/
    Labels/
      50ml_Final/
      8ml_Working/
    Product_Photography/
    Campaigns/
    Social/
    Website_Selected/

  05_Digital/
    Website/
      firebase.json
      .firebaserc
      frontend/
      functions/
      reference/
        stitch/
    Social_Content/

  99_Archive/
    Previous_Website/
    Superseded_Brand_Decisions/
    Rejected_Artwork/
    Historical_Operational_Notes/
```

## Canonical Migrations

| Current source | Planned source | Rule |
| --- | --- | --- |
| `BRAND_SYSTEM.md` | `01_Brand_System/Core/BRAND_SYSTEM.md` | Keep locked identity, collection, visual system, and explicit TBD items together. |
| `AFTERSTORY_Instagram_Visual_Style_Master.md` | `01_Brand_System/Communication/SOCIAL_VISUAL_GUIDE.md` | Keep as the social visual authority. |
| `PRODUCTION_AND_TESTING.md` | `02_Operations/Production/PRODUCTION_AND_TESTING.md` | Keep batch/testing/calibration records and production-route research together. |
| `PURCHASES.csv` and invoice files | `03_Finance/Purchases/` | CSV is the transaction index; invoices are evidence. |
| `07_Banking_Records/` | `03_Finance/Banking_Private/` | Remain Git-ignored and excluded from routine work. |
| `03_Label_Files/` and selected generated images | `04_Assets/` | Separate print-ready files from working/rejected artwork; use `ASSET_CATALOG.csv` as the routing index rather than per-folder Markdown notes. |
| `06_Website/V2 Website/` | `05_Digital/Website/` | Keep one Firebase root, one frontend, one functions directory. |
| `stitch-source/` | `05_Digital/Website/reference/stitch/` | Reference only; never active website source. |

## Work Packets

| Task | Read only these sources |
| --- | --- |
| Brand wording or product story | `BRAND_SYSTEM.md`, `COMMUNICATION_GUIDE.md` if relevant |
| Fragrance or chapter lookup | `FRAGRANCE_MASTER.md`, `fragrance_reference_map.md` |
| Label change or print check | `LABEL_PRODUCTION_SPEC.md`, `ARTWORK_STATUS.md`, selected asset folder |
| Current stock or production entry | `INVENTORY_MASTER.csv`, `INVENTORY_TRANSACTIONS.csv`, `PRODUCT_MASTER.csv` |
| Cost, quote, or margin | `COSTING.md`, `PRICING_MASTER.csv`, relevant product or purchase row |
| Purchase or supplier update | `PURCHASES.csv`, `SUPPLIER_MASTER.csv`, invoice evidence |
| Website content change | `frontend/content/`, target component, selected website asset |
| Website infrastructure | `firebase.json`, `functions/`, target frontend configuration |
| Banking or payment QR | `Banking_Private/` only |

## Consolidation and Removal Rules

- Do not merge CSV masters with the inventory ledger; they serve different purposes.
- Merge final 8 ml review decisions into artwork and packaging records once approved, then archive the review file.
- Keep one policy source and render website policy pages from it; do not maintain a markdown draft and page copy independently.
- Keep one Firebase configuration at the website root. Retire nested copied Firebase files.
- Delete generated build folders only after confirming a successful rebuild.
- Archive V1 website source only after V2 is deployed, verified, and live on the domain.
- Retain invoices, ledgers, batch records, supplier evidence, and approved original artwork. These are not disposable archive data.

## Migration Sequence

1. Freeze routine changes briefly and take a Git checkpoint.
2. Create the target folders without moving files.
3. Move canonical records one domain at a time and update `OPERATING_MAP.md` after each domain.
4. Hash-check each asset move and verify website builds after digital moves.
5. Archive superseded material with a short retention register.
6. Remove generated output and duplicates only after the new references are verified.
7. Delete the V1 website only after V2 production cutover and rollback approval.

## Zero-Regression Safeguards

- Never delete or overwrite a source file during migration. Copy or move only after its destination, references, and checks are ready.
- Before moving a website file, verify imports, configuration references, and a successful production build after the move.
- Before moving a business record, update its route in `OPERATING_MAP.md`, then verify the canonical data is unchanged.
- Hash-check moved assets and retain the original until the destination is verified.
- Make small, single-purpose Git commits after each completed migration packet so any error has a clear recovery point.
- Stop and ask for direction if a migration would alter live hosting, domain routing, financial records, banking records, inventory, or source-of-truth data.
