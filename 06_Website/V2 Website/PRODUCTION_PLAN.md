# Production plan and decisions

## Build approach

Use the existing `../../afterstory-site/` codebase and its `PROJECT_MAP.md` as the starting technical reference. It currently uses React/vinext and Firebase Hosting. Decide whether to retain that setup before changing framework or hosting. Keep V2 implementation isolated from the live site until preview acceptance. The downloaded Stitch HTML uses Tailwind's browser CDN, inline scripts, static text, and externally hosted images; it is a **prototype source**, not deployable production code. Rebuild it into shared components and structured content rather than wiring the files directly to production routes.

Suggested implementation modules: site shell/navigation; product catalog and shared product-card; product detail; cart state and persistence; delivery quote/validation; payment adapter; order confirmation; policy pages; analytics/SEO. Keep prices, availability, shipping fees, and payment totals on an authoritative server-side path for checkout. The same totals must appear in cart, checkout, gateway request, and order record. Do not place API keys or payment secrets in frontend code or this handoff folder.

## Build inputs and integration gates

1. **Products and content:** Take launch eligibility from `PRODUCT_MASTER.csv`; prices from `PRICING_MASTER.csv`; names, profiles, stories and concentration from `MASTER_SPEC.md`. Verify actual saleable stock in `INVENTORY_MASTER.csv` when implementing inventory behavior. Decide whether public catalog shows unlaunched names; never give them purchase actions by default.
2. **Photography:** Select approved, accurate 50 ML product images for each launch scent. The existing web-selected copies are under `../../afterstory-site/public/images/shop/`; originals should remain in the generated-image archive. Validate current label artwork against the final 50 ML sticker set before using any generated packshot. Stitch's local image assets are references, not approved product photographs.
3. **Delivery and tax:** Approve shipping zones, rate/free-shipping threshold, any surcharge, dispatch/ETA language, prepaid/COD policy, GST/invoice treatment, and returns policy. Show the final payable total before payment. The current site and Stitch disagree about the delivery charge.
4. **Payments and orders:** Choose the provider and configure merchant account, credentials, webhook validation, payment success/failure, idempotent order creation, refunds, customer notification, and reconciliation. The Stitch “Pay” button does not process payment.
5. **Customer data and policies:** Approve privacy policy, terms, shipping/returns, contact/support, data retention, and newsletter consent before enabling forms or collecting personal details.
6. **Domains and release:** Keep the existing canonical domain `https://www.afterstory.in`; map routes, redirects, metadata, sitemap, robots, social images, analytics, and Search Console. Use a non-production preview first, then release only after an explicit decision.

## Verification before release

- Confirm all three launch products' names, stories, sizes, prices, MRP, eligibility, photos, and stock against canonical sources.
- Test mobile and desktop across homepage → collection/search/filter → product → cart → shipping quote → payment → confirmation; test empty cart, invalid PIN, unavailable delivery area, gateway failure, duplicate callback, refresh/back navigation, and out-of-stock behavior.
- Check accessibility: keyboard navigation, visible focus, form labels/errors, contrast, image alt text, and reduced-motion behavior.
- Check performance and reliability: locally hosted optimized images, no browser Tailwind CDN dependency, responsive image sizes, caching, and no broken external media.
- Check content, policies, SEO, analytics/consent, HTTPS, and real provider claims. Remove every issue in `CONCEPT_AUDIT.md` or replace it with approved evidence.
- Run the applicable build/lint checks and verify the complete preview in a browser before any domain or production deployment.

## Decisions still needed

| Decision | Current state |
| --- | --- |
| Final web visual direction and desktop layouts | Mobile Stitch concept only; V2 palette/type are not recorded as locked brand standards. |
| Other ten fragrances' public visibility and release status | Names/order locked; availability and prices not approved. |
| Delivery policy | Current site content and Stitch conflict; canonical pricing register separates delivery from product price. |
| Payment provider and checkout architecture | Not confirmed in canonical sources. |
| Final product photography | Stitch images are conceptual; verify against current physical labels. |
| Product note pyramids and performance claims | Do not infer from scent profile or inspiration mapping. |
| Policies, customer support channel, newsletter | Need approved wording and working systems before collection or publication. |
| Hosting/framework change, if any | Existing site setup is available; no change selected. |

No implementation, preview deployment, or production change has been made as part of this handoff.

## Confirmed direction update

The current implementation decisions supersede any earlier unresolved delivery and launch notes above:

- India-wide delivery: ₹100 for orders of ₹999 or less; free above ₹999.
- Dispatch occurs within 2–3 days, followed by another 2–3 days for delivery. All Indian PIN codes are serviceable.
- Razorpay is selected for payment; setup is deferred. Guest checkout is allowed and COD is disabled.
- No returns or refunds are processed.
- Launch products are FIRST LIGHT, TOBACCO BLOOM, and WHITE MUSK. The other fragrances are hidden from the storefront for now.
- When stock reaches zero, disable purchase and show **Under Preparation**.
- Support is afterstory@gmail.com and WhatsApp 9161666633.
- The owner alone can access the separate order and inventory dashboard through the existing Google/Firebase owner account.
- Keep the current live website untouched. Use a preview deployment before any future replacement of www.afterstory.in.
- Legal business name: Amelia Enterprises. GSTIN: 09EJZPK1192M1Z7. Registered address: JN E 606, ECLLAVE, JANESHWAR, Jankipuram, Lucknow, Uttar Pradesh. State code: 09. GST contact: 9044822366.
- Final product imagery is available in 04_Generated_Images/Website_Selected/ and 04_Generated_Images/Packaging/Single_Product_Mockups/. Use these finalized bottle and label assets instead of Stitch-hosted conceptual images.
- **Responsive scope:** Support mobile, tablet, laptop, and wide desktop layouts. Validate representative sizes across all four ranges.