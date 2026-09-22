# V2 website brief

## Goal and scope

Make AFTERSTORY immediately recognizable as a perfume store while keeping its quiet, literary identity. A visitor should be able to discover a scent, see the confirmed product facts and full payable total, and complete an order. The core line is **“Fragrance for what remains after the moment.”** This brief prepares that build; it does not authorize release or turn Stitch's example checkout into a payment system.

## Canonical brand and catalog

- Brand: AFTERSTORY, an independent Indian unisex fragrance brand. Product designation: **Extrait de Parfum**. Confirmed concentration: **25% by weight**. Display `50 ML` for the three web launch products.
- Current web launch products: **FIRST LIGHT** (Chapter 03), **TOBACCO BLOOM** (Chapter 02), and **WHITE MUSK** (Chapter 06). Each has public selling price **₹499**, MRP **₹799**, subject to the current canonical pricing register at build/release time. Do not infer stock quantities from launch status.
- Confirmed profiles and stories:

  | Product | Profile | Story |
  | --- | --- | --- |
  | FIRST LIGHT | Citrus / Green Florals / Clean Woods | First light, finding its way through quiet mornings. |
  | TOBACCO BLOOM | Tobacco / Vanilla / Warm Woods | Tobacco bloom, lingering softly after the evening ends. |
  | WHITE MUSK | Powder / White Florals / Musk | White musk, resting softly against warm bare skin. |

- Locked collection order: 01 STILL HERE; 02 TOBACCO BLOOM; 03 FIRST LIGHT; 04 LAST LOOK; 05 DARK WOOD; 06 WHITE MUSK; 07 GOLDEN ORCHID; 08 YUZU WAVE; 09 LAST CALL; 10 CANDY FLOSS; 11 SLOW CARAMEL; 12 OLD ESTATE; 13 QUIET SHADOW. The wider launch selection remains undecided. Do not expose the other ten as purchasable without a separate release decision. Customer-facing prefix for 08–13 is TBD, so avoid locking all 13 to “Chapter” in final copy.
- Do not offer the 8 ML products in checkout. Their branded-label release remains pending.
- Canonical sources: `../../01_Brand_Records/MASTER_SPEC.md`, `BRAND_PRINCIPLES.md`, `../../02_Inventory_Costing/PRODUCT_MASTER.csv`, and `PRICING_MASTER.csv`. These are the source of truth; this page is a dated handoff snapshot.

## Design direction

Use the Stitch concept's **midnight / steel / ember** treatment for the web interface: Midnight `#111923` for immersive hero and selected dark sections, Slate `#23313C`, cool white `#F7F9FA` for shopping surfaces, near-black `#17191C` for light-surface text, Steel Blue `#839AAB` for secondary details, and Ember Orange `#FF6A35` for a few strong actions. Treat these as **V2 concept colors pending final web approval**. The locked warm ivory `#F6F1E6` applies to physical labels and the brand-kit swatch; it is not a mandate to turn the web shopping canvas ivory.

The concept uses EB Garamond for editorial headings and Inter for functional interface text. The physical 50 ML label's Free Serif/Lato settings are a separate production specification. Keep a clean shopping hierarchy, readable type, sharp alignment, thin rules, generous space, clear tap targets, and restrained motion. Product photography must make bottle and label readable. Cinematic scenes can show an aftermath—an empty chair, rain on a window, a coat by a book—but should support, not replace, product images. All Stitch images are conceptual until reviewed against actual packaging and usage rights.

## Pages and behavior to build

| Page | Required content and behavior | Stitch reference |
| --- | --- | --- |
| Homepage, mobile and desktop | AFTERSTORY name, explicit perfume context, core line, clear collection CTA, three launch products, short brand story, minimal navigation (`Shop`, `Our Story`, `Cart`). | `stitch-source/code/mobile-homepage.html`; no desktop screen supplied. |
| Collection, mobile and desktop | Scalable catalog for 13 named fragrances; only approved live products have price/cart actions. Search and one compact scent-family filter. Card data comes from a common product model, not copied HTML strings. | `collection-13-chapters.html`; no desktop screen supplied. |
| Product detail, mobile and desktop | Bottle gallery; name, chapter, confirmed story/profile, 50 ML, 25% Extrait de Parfum, current price/MRP, quantity and cart action; truthful notes, delivery, and returns sections. Template must work for all three launch products. | `tobacco-bloom-product.html`; no desktop screen supplied and other two product screens absent. |
| Cart | Item image/name/size, quantity/remove, line subtotal, delivery calculation, tax handling, payable total, and empty-cart state. State must persist across navigation. | `cart-checkout.html` is a combined mockup. |
| Checkout | Contact, Indian delivery address/PIN, validated shipping availability and fee, final total, payment method, real payment handoff, order confirmation and error/retry path. | `cart-checkout.html` is visual only. |
| Story, service, legal | Concise brand story; real shipping, returns, contact, privacy, and terms content when approved. | No complete Stitch screens supplied. |

Responsive behavior: design desktop compositions intentionally, rather than stretching the 390 px mockups. Keep mobile navigation short, labels and prices readable, and primary purchase actions easy to find. Product images must retain meaningful alt text. Do not use unsupported reviews, ratings, performance promises, stock badges, batch numbers, or urgency claims.

## Existing site relationship

The existing website at `https://www.afterstory.in` uses source in `../../afterstory-site/` and currently includes a coming-soon page and shop content. Its content files and selected images may provide implementation starting points, but V2 should be prepared in an isolated branch or directory when implementation is approved. Preserve the live deployment until the new experience is tested and explicitly released. The current `content/shop.ts` contains delivery text (`₹99`, free above `₹899`); this conflicts with the Stitch checkout's `₹50` and product page's free-shipping claim. Resolve the actual delivery policy from an approved operational source before implementing checkout.
 
## Confirmed commerce and release directions
 
- **Launch availability:** FIRST LIGHT, TOBACCO BLOOM, and WHITE MUSK are initially purchasable. Other fragrances are not displayed in the storefront for now.
- **Initial sellable stock:** FIRST LIGHT: 1 bottle; TOBACCO BLOOM: 2 bottles; WHITE MUSK: 1 bottle. Verify live stock against 02_Inventory_Costing/INVENTORY_MASTER.csv when implementation begins.
- **Out-of-stock behavior:** When a product's stock reaches zero, disable purchase and show a button labeled **Under Preparation**.
- **Delivery:** India-wide delivery. Orders of ₹999 or less incur a ₹100 delivery charge. Orders above ₹999 receive free delivery. Dispatch is within 2–3 days; delivery takes another 2–3 days after dispatch. All Indian PIN codes are serviceable.
- **Payment and checkout:** Guest checkout is allowed. COD is unavailable. Razorpay is the planned payment provider, with merchant setup to be completed later. GST invoices are required.
- **Returns:** No returns or refunds are processed.
- **Support:** Customer support email is afterstory@gmail.com; WhatsApp support number is 9161666633.
- **Administration:** Provide a separate order and inventory dashboard restricted to the owner through the existing Google/Firebase owner account.
- **Release:** Keep the current live website untouched during development. Create and test a preview deployment first; replace www.afterstory.in only after the V2 site is approved for release.
- **Scope:** Build responsively for mobile, tablet, laptop, and wide desktop layouts. Product photography is sourced from the finalized assets in 04_Generated_Images.
- **Business identity:** Legal business name is Amelia Enterprises. Registered address: JN E 606, ECLLAVE, JANESHWAR, Jankipuram, Lucknow, Uttar Pradesh. GSTIN: 09EJZPK1192M1Z7. State code: 09. GST contact: 9044822366.

- **Product imagery source:** Use the finalized bottle and label assets in 04_Generated_Images/Website_Selected/ and 04_Generated_Images/Packaging/Single_Product_Mockups/. The launch-three-scents images are suitable for collection/hero use; the individual first-light-story-01.png, tobacco-bloom-story-01.png, and white-musk-story-01.png files are suitable for product detail imagery. Do not use earlier Stitch-hosted conceptual images as final product photography.
## Additional confirmed operational details

- Product prices are inclusive of **18% GST**. Do not add GST on top of the displayed ₹499 selling price.
- Dispatch address is the same as the registered GST address: JN E 606, ECLLAVE, JANESHWAR, Jankipuram, Lucknow, Uttar Pradesh.
- Stock is reserved only after successful Razorpay payment confirmation.
- After successful payment confirmation, fulfill the order on a ready-to-make basis and then dispatch it under the confirmed 2–3 day dispatch window.
- Owner dashboard authentication account: devkapoor.1917@gmail.com. Keep this account detail out of public storefront code and client-side data.
- Final public product-image approval remains pending.