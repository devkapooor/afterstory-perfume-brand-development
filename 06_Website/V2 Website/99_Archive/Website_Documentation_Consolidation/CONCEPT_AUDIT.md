# Stitch concept audit: fix before production

This audit compares the downloaded Stitch HTML with the canonical brand/product records and the existing website content as of 2026-09-23. It does not alter the original concept files. Search the named HTML file for the quoted phrase; line numbers may change if files are regenerated.

| Screen | Concept content or behavior | Production treatment |
| --- | --- | --- |
| `collection-13-chapters.html` | “30% pure fragrance oil” and “six weeks”/“42 Days” maceration | Incorrect for the confirmed 25% concentration; supplied maceration direction is 14–21 days, and actual batch evaluation is separate. Remove or replace with approved, verified facts. |
| `mobile-homepage.html` and duplicate prototype | “12+ Hours” longevity | No approved performance evidence. Remove. |
| `tobacco-bloom-product.html` | “14+” hours, detailed top/heart/base notes, “Free domestic shipping,” “IN STOCK,” batch and delivery/return assurances | Verify each claim and policy. The approved three-part scent profile does not authorize invented note ingredients or performance/stock promises. |
| `cart-checkout.html` | Fixed `₹50` delivery and `₹549` total | Conflicts with existing `afterstory-site/content/shop.ts` (`₹99`, free above `₹899`). Obtain the actual approved shipping rule and calculate totals from it. |
| `cart-checkout.html` | “Razorpay Verified,” “256-Bit SSL Encrypted,” gateway fee assurances | Payment provider and security claims are unverified. Replace with actual integration and substantiated wording. |
| `cart-checkout.html` | “Macerated in Grasse,” tamper seal, complimentary sample, COD restriction | These are not established for website sale. Remove unless separately confirmed. |
| `mobile-homepage.html` and `collection-13-chapters.html` | “© 2024” / “Est. MMXXIV” | Brand record says established 2026. Use the correct year or omit the founding-year claim. |
| `mobile-homepage.html` | “37% OFF” from ₹799 to ₹499 | Superseded: current launch price is ₹599. Avoid a fixed percent badge unless an approved rounding/display rule is established. |
| `mobile-homepage.html` | ₹899 “Chapter Trilogy” of 3 × 10 ML | No approved 10 ML product or public trio price. Remove. |
| `collection-13-chapters.html` | All 13 named as “chapters,” with invented scent notes/availability for non-launch products | Names/order are locked, but public prefix for 08–13 and sale status are not. Use only canonical profiles/stories where public content is approved. |
| All generated HTML | CDN Tailwind, inline JavaScript, hardcoded catalog/cart data, placeholder links and image URLs | Rebuild as real routes/components/data and keep the original files for reference. No payment or order backend exists in these files. |
| All concept media | Generated bottles and logo may differ from actual 50 ML packaging | Treat as conceptual until physical-product/label accuracy and usage approval are checked. |

The core brand sentence, three launch product names, their stated three-part profiles, 50 ML designation, 25% concentration, ₹599 selling price, and ₹799 MRP have canonical support. Even those values should be checked again against the live canonical registers at build and release time.
