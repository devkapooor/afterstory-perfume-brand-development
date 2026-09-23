# AFTERSTORY Website: Focused Editing Map

Coming-soon page hosted through Firebase project `afterstory-36c7a`. Use a Firebase preview channel before production or DNS changes.

Live domain verified 2026-09-07: https://www.afterstory.in serves the production page over valid HTTPS; https://afterstory.in redirects permanently (301) to it. Updated visitor text, Instagram link, robots.txt and sitemap.xml verified live. Google Search Console setup remains pending.

| Change | Edit |
| --- | --- |
| Wording, Instagram URL, image selection, alt text, metadata | `content/site.ts` |
| Shop prices, ordering terms and product image selection | `content/shop.ts` (names/stories come from `content/site.ts`) |
| Shop layout, scent selection and styling | `app/shop/page.tsx`, `components/shop/ShopCollection.tsx`, `app/shop/shop.css` |
| Header layout | `components/landing/Header.tsx` |
| Introduction layout | `components/landing/Introduction.tsx` |
| Image rendering and motion overlays | `components/landing/Campaign.tsx` |
| Footer layout | `components/landing/Footer.tsx` |
| Motion speed, strength, masks and image styling | `components/landing/campaign.css` |
| Page typography, colors, layout, breakpoints | `app/globals.css` |
| Section order | `app/page.tsx` |
| Fonts and document structure | `app/layout.tsx` |
| Firebase Hosting target, cache headers and `dist/client` public directory | `firebase.json` and `.firebaserc` |

## Working Rules

## V2 Component Map

| Change | Edit |
| --- | --- |
| Launch product data, pricing and delivery copy | `content/v2.ts` |
| V2 page composition and cart state | `components/v2/V2Storefront.tsx` |
| Navigation or footer | `components/v2/V2Header.tsx`, `components/v2/V2Footer.tsx` |
| Hero, collection, product cards, story/shipping sections | `components/v2/V2Hero.tsx`, `V2Collection.tsx`, `V2ProductCard.tsx`, `V2StorefrontSections.tsx` |
| Cart storage, cart drawer and cart rules | `components/v2/cart.ts`, `V2CartDrawer.tsx` |
| Product-page composition | `components/v2/V2ProductDetail.tsx` |
| Product image, purchase controls or disclosures | `components/v2/V2ProductGallery.tsx`, `V2ProductPurchase.tsx`, `V2ProductDisclosures.tsx` |
| V2 styles | `app/v2/v2.css` |

- For V2 work, start with `content/v2.ts` and the one matching component above. Do not open the old landing or shop components unless the task explicitly concerns V1.
- `components/landing`, `components/shop`, and `components/ui` are inactive V2 scaffolds. They mirror the old site's component domains but contain no copied V1 code.

- Start with this map and the smallest relevant file. Do not routinely read all components or the whole business history.
- Search `app`, `content`, and `components/landing` by default. Inspect `components/ui` only when using a primitive.
- Do not scan `node_modules`, dependency backups, `dist`, `out`, `.vinext`, image archives or purchase invoices for unrelated website changes.
- Preserve original generated images in `../04_Generated_Images`. Only selected web-optimized copies belong in `public/images`.
- Wording embedded in a campaign poster cannot be changed through the content file; changing that requires a separately approved artwork edit.
- Motion masks are tied to the selected image's coordinates. Check them when changing images. Keep the image uncropped and the bottle/text static.
- Do not add dependencies, regenerate imagery, or perform a new full visual review for every small text edit. Use focused checks; use a production build for structural changes and before any approved release.

## Local Commands

- `npm run dev -- --host 127.0.0.1 --port 4173`: framework preview.
- `npm run build`: static production export; does not publish.
- Keep the installed package versions and committed lockfile stable.
- `firebase hosting:channel:deploy prelaunch --project afterstory-36c7a`: deploy a temporary review URL.
- `firebase deploy --only hosting --project afterstory-36c7a`: production release only after preview approval.

See `CLEANUP_REPORT.md` for the completed size audit and verification results.
