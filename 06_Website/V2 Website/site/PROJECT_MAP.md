# AFTERSTORY V2 Frontend Map

This folder contains the isolated V2 storefront. It is not the live V1 deployment. For business requirements and execution status, read `../V2_REQUIREMENTS.md` and `../TASK_QUEUE.md`; use canonical business sources named there for live facts.

## Focused Editing Map

| Change | Edit |
| --- | --- |
| Launch product data, pricing, delivery, and stock-display copy | `content/v2.ts` |
| V2 page composition and shared storefront state | `components/v2/V2Storefront.tsx` |
| Navigation or footer | `components/v2/V2Header.tsx`, `components/v2/V2Footer.tsx` |
| Hero, collection, cards, story, and shipping sections | `components/v2/V2Hero.tsx`, `V2Collection.tsx`, `V2ProductCard.tsx`, `V2StorefrontSections.tsx` |
| Cart storage, rules, and drawer | `components/v2/cart.ts`, `V2CartDrawer.tsx` |
| Product-detail composition | `components/v2/V2ProductDetail.tsx` |
| Product image, purchase controls, or disclosures | `components/v2/V2ProductGallery.tsx`, `V2ProductPurchase.tsx`, `V2ProductDisclosures.tsx` |
| V2 styles | `app/v2/v2.css` |
| V2 route | `app/v2/page.tsx` |
| Firebase Hosting and Functions configuration | `../firebase.json`, `../.firebaserc`, `../functions/` |

## Working Rules

- Start with `content/v2.ts` and one matching component. Do not open V1 landing or shop code unless the request explicitly concerns V1.
- `components/landing`, `components/shop`, and `components/ui` are empty future areas. Do not copy the V1 component library into them without an actual shared-use need.
- Keep V2 isolated: do not change V1 behavior, production Firebase configuration, domain settings, payment secrets, or canonical inventory/pricing records without explicit approval.
- Avoid routine reads of `node_modules`, build output, caches, image archives, and invoices. Run targeted format/lint/build checks for the files changed.

## Local Commands

- `npm run dev -- --host 127.0.0.1 --port 4175`: local V2 preview.
- `npm run build`: V2 production build; it does not publish.
