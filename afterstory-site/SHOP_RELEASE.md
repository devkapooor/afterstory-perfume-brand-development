# Shop release - 2026-09-19

Status: deployed to Firebase Hosting project `afterstory-36c7a`; verified live at https://www.afterstory.in/shop with correct products, pricing and ordering links.

User approved the product-page mockup and requested publishing it as the Shop page. Route: `/shop`. Homepage links to Shop. Product switching shows First Light, Tobacco Bloom or White Musk, their approved stories/notes, and Instagram ordering. Prices: INR 799 MRP and INR 499 launch price for 50 ml. Shipping INR 99, free above INR 899, prepaid only.

Four versioned WebP images are under `public/images/shop` (approximately 104-184 KB each). Original images remain in the generated image library. Decorative invented copy from the image mockup was omitted. No checkout, database or visitor information collection was added.

Verification: production static export passed for `/` and `/shop`. Firebase preview channel `shop-review` deployed successfully. Browser verified desktop layout, 390 px and 360 px mobile layout without horizontal overflow, all four images loaded, scent selection by mouse and keyboard, and Instagram link destination. Viewport override reset after testing.

Full-project TypeScript check reports missing lucide-react declarations in unrelated UI components; no Shop-file errors were reported. The successful production build does not imply those existing type errors are resolved.
