# AFTERSTORY Operating Rules

## Start Here

The user communicates naturally and is not expected to know file paths. Classify the task before reading files using the rules below.

When routing is needed, read `CONTEXT.md`, then only the required canonical source(s). If the route remains unclear, read `PROJECT_MAP.md`, then use targeted search. Broaden investigation only when necessary; never scan the repository by default.

## Task Classification Before File Access

1. **General / creative task**: Use zero file reads when the prompt is sufficient and no existing brand standard or business data is needed.
2. **Brand-sensitive creative task**: First determine whether an approved standard is relevant. Read only the minimum canonical brand, fragrance, or communication source necessary; exclude unrelated business data. A known canonical source can be read directly without `CONTEXT.md`.
3. **Data-dependent task**: Read `CONTEXT.md` first, then only the required canonical business sources.
4. **Operational update**: Read `CONTEXT.md` first, then read and write only the required canonical operational records.
5. **Website / technical task**: Use only relevant application files and any canonical business source required by the change; use the routing sequence above if their location is unclear.

## Persistence and Reusability

Classify completed work before saving it.

- **Temporary work**: One-off messages, calculations, brainstorming, rejected ideas, rough captions, comparisons, questions, and exploratory analysis are not saved by default.
- **Reusable brand knowledge**: Save tone, terminology, caption conventions, packaging copy rules, visual direction, naming, and formatting rules only when approved as a rule, standard, locked decision, or future practice. Use the appropriate canonical source.
- **Operational business data**: Automatically record confirmed inventory movements, production, purchases, approved price changes, supplier information, expenses, and product changes in the relevant canonical records.
- **Approved reusable assets/templates**: Save a template only when requested or explicitly approved as a recurring template.

Do not ask to save work marked temporary, one-time, just for now, or do not save. Save without asking when the user says save this, use this going forward, make this standard, lock this, or from now on.

Use `01_Brand_Records/COMMUNICATION_GUIDE.md` as the canonical source for reusable communication principles. Create it only after the first communication standard is approved, and register its route in `CONTEXT.md` and `PROJECT_MAP.md`. Store concise principles, not a history of generated messages or a separate file per message.

Use the title `AFTERSTORY Communication Guide`. Add sections only for approved standards: `Global Voice` (only cross-channel rules), `Retailer WhatsApp`, `Customer WhatsApp` with an `Order Updates` subsection, `Instagram`, `Product Copy`, or `Website Copy`, as needed. Do not create empty sections.

### First-Time Brand Pattern Detection

Before creating brand-facing material, check `COMMUNICATION_GUIDE.md` or the relevant canonical brand source for an approved category standard or template. Adapt it to the purpose rather than blindly copying prior messages.

- **Standard exists**: Apply it automatically. Ask about saving only when a meaningful new reusable style rule is useful and its permanence is unclear, never merely because a new message was generated.
- **No standard exists**: Complete the requested output, then ask once: "Should I use this as the basis for our [category] communication style going forward?"
- **Approved**: Extract and save reusable principles. Save the exact output only if specifically requested.
- **Declined**: Save nothing; treat the output as temporary.

Use broad categories to minimize stored context. Ready, dispatched, delayed, and confirmed messages normally belong under `Customer WhatsApp` > `Order Updates`; split only when communication requirements genuinely differ. Likewise, avoid separate standards for minor retailer-message variations.

Apply the temporary-work and explicit-save exceptions above. Do not ask persistence questions for non-brand work such as calculations, factual lookups, debugging, analysis, or unrelated rewriting.

## Data Rules

- Prefer updating an existing canonical source; do not duplicate business data for convenience.
- Treat LOCKED decisions as fixed unless the user explicitly reopens them.
- Never guess numerical inputs or resolve conflicts between authoritative-looking sources silently. Surface the conflict and ask when a decision is required.
- Preserve business data. Use extra caution and obtain confirmation for destructive operations.
- Use Git history when a Git repository exists; do not create duplicate files with names such as `final_v2`, `final_new`, `latest_final`, `updated_final`, or `copy_of_final`.
- For a confirmed stock movement, identify the item in `PRODUCT_MASTER.csv`, append one row to `INVENTORY_TRANSACTIONS.csv`, then update the matching `INVENTORY_MASTER.csv` balance. Do not recreate historical movements unless evidence supports them.
- Update approved price changes in `PRICING_MASTER.csv`. Preserve prior pricing rows when effective-date history matters.
- Consult `REVIEW_REQUIRED.md` only when a canonical row is marked unresolved or a task specifically asks about open issues.

## Documentation Consistency

When a confirmed change affects information represented in active Markdown records:

1. Update the canonical source first.
2. Identify only the active Markdown files that repeat, summarize, or operationally depend on that changed information.
3. Update those affected files in the same change, or replace repeated facts with a clear reference to the canonical source where appropriate.
4. Run a targeted search for the changed identifier, value, or wording to find stale active references. Exclude `99_Archive`, generated output, dependencies, and historical evidence unless the task explicitly concerns them.
5. Do not create new duplicate facts merely to make a document feel complete. Each new repeated fact must have a maintenance purpose.
6. If two active sources conflict, stop and surface the conflict instead of silently choosing one.

The goal is not to edit every Markdown file mechanically. The goal is that all active records affected by a decision remain consistent, while one canonical source remains authoritative.

## Commit Discipline

- Complete each discrete implementation or record-update step with a small, focused Git commit and push it before beginning the next independent step.
- Before committing, review every changed Markdown file and run the documentation-consistency check for active Markdown records affected by the change.
- Do not commit unrelated working-tree changes, generated output, build artifacts, private banking records, secrets, or temporary files.
- Do not create a commit for a read-only lookup, a temporary answer, or work that made no tracked file changes.
- If a task cannot be safely committed because it is incomplete, keep working within that same step. Do not create a misleading partial completion commit.

## Scope Discipline

- `99_Archive` is excluded from routine business lookup. Search it only when the user explicitly requests history, canonical/current sources lack required information, a prior decision/value must be traced, or superseded information must be recovered. Do not search it merely to verify current canonical data.
- Do not inspect image, PDF, or other binary folders unless the task needs those assets.
- Do not inspect dependencies, build outputs, caches, generated files, or `node_modules` unless technically necessary.
- Keep routine responses concise. Create reports only when useful or requested.

## Routing Examples

- “How many Golden Orchid bottles do we have?”: `CONTEXT.md` -> inventory route -> canonical inventory source.
- “Calculate margin at a retailer price of INR 799.”: `CONTEXT.md` -> pricing + costing routes -> minimum relevant sources.
- “What is the final 8 ml label size?”: `CONTEXT.md` -> packaging route -> label specification.
