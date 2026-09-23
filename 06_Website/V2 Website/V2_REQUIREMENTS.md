# AFTERSTORY V2 Requirements

This is the active V2 handoff and requirements guide. It is an implementation reference, not a source of truth for business facts. For current task status, use `TASK_QUEUE.md`. For current product, price, inventory, brand, and packaging facts, use the canonical business records named below. The superseded handoff documents are retained unchanged in `99_Archive/Website_Documentation_Consolidation/` for recovery and historic context only.

## Scope and Authority

- The V2 application is developed in `site/` and must remain isolated from the live V1 source in `../../afterstory-site/` until preview testing and an explicit release decision.
- V2 must be built as reusable components with structured content. Stitch HTML and external Stitch media are visual references only, never production checkout or final product data.
- Product names, chapter order, stories, approved short descriptions, concentration, and launch eligibility come from `../../01_Brand_Records/MASTER_SPEC.md` and `../../02_Inventory_Costing/PRODUCT_MASTER.csv`.
- Product price and MRP come from `../../02_Inventory_Costing/PRICING_MASTER.csv`; current sellable stock comes from `../../02_Inventory_Costing/INVENTORY_MASTER.csv` immediately before release. Do not infer stock from a website label.
- Public policy wording and completed technical work are governed by V2 source code and `TASK_QUEUE.md`, not by historic handoff snapshots.

## Storefront Requirements

- Launch products are FIRST LIGHT (Chapter 03), TOBACCO BLOOM (Chapter 02), and WHITE MUSK (Chapter 06), in `50 ML`, `Extrait de Parfum`, at `25% by weight`.
- Current public product price is INR 599, MRP is INR 799, and the displayed price is GST-inclusive. Do not add GST a second time at checkout.
- Other fragrances stay unavailable unless a separate release decision is recorded. A zero-stock item must show `Under Preparation` and cannot be added to cart.
- Browse categories are Men, Women, and Unisex. Do not describe every product as unisex by default.
- Do not sell 8 ML products through V2 checkout while branded-label release is pending.
- Product imagery must use approved, accurate bottle-and-label assets, not conceptual generated packaging or Stitch-hosted assets.
- Do not present unsupported ratings, reviews, longevity, maceration, ingredient pyramids, stock urgency, batch claims, free-shipping promises, or security/provider claims.

## Commerce and Release Controls

- India-wide delivery is INR 100 for totals of INR 999 or less and free above INR 999. The final payable total must be calculated consistently in the cart, checkout, payment request, and order record.
- Guest checkout is allowed; COD is unavailable. Stock is reserved only after verified payment success.
- Razorpay integration, webhooks, idempotent order creation, and payment confirmation require a secure server-side path. Never place credentials or secrets in client code or this folder.
- Paid orders are fulfilled ready-to-make, then dispatched within 2-3 days. Delivery is estimated at a further 2-3 days.
- Keep production domain, live V1 deployment, and Firebase production configuration unchanged until a preview passes testing and the owner explicitly approves release.

## Experience and Quality

- Use the approved V2 visual direction: midnight, steel, and ember for digital surfaces; EB Garamond for editorial headings and Inter for functional interface text. Physical-label Free Serif/Lato settings do not control web typography.
- Design intentionally for mobile, tablet, laptop, and wide desktop. Preserve clear product imagery, readable prices, keyboard access, visible focus, labels/errors, meaningful alt text, and reduced-motion behavior.
- Verify the complete path: homepage, collection/search/filter, product, cart, shipping calculation, payment outcome, order confirmation, empty cart, invalid or unavailable shipping data, duplicate/replayed callbacks, stock exhaustion, browser refresh/back navigation, and responsive layouts.
- Before any production release, verify current canonical facts, policy wording, SEO/metadata, analytics and consent choices, HTTPS, images, accessibility, performance, and real provider claims. Run the applicable build and lint checks and test the preview in a browser.

## Historic Concept Risks

The archived Stitch audit records unsupported or superseded concept claims, including 30% concentration, six-week/42-day maceration, longevity claims, invented notes, fixed INR 50 delivery, free-shipping or stock claims, unverifiable security claims, incorrect founding year, retired INR 499 price/discount, unapproved 10 ML bundles, and invented availability for the wider collection. These must not be restored to V2 without verified approval.
