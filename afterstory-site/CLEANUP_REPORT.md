# AFTERSTORY Website Cleanup Report

Completed locally on 2026-09-07. Nothing was published and no domain settings were changed.

## Result

- The landing page is split into Header, Introduction, Campaign and Footer components.
- Editable wording, links, metadata and selected-image information are centralized in `content/site.ts`.
- Campaign motion controls and tuning values are isolated in `components/landing/campaign.css`.
- The production framework build and framework development preview both work.
- The temporary text-parsing preview was retired after the framework preview passed.

## Image Audit

| Measurement | Before | After |
| --- | ---: | ---: |
| Website image files | 4 | 1 |
| Website image bytes | 7,952,354 | 174,210 |
| Approximate reduction |  | 97.8% |

The selected 1122 x 1402 image was converted from PNG to WebP at visual-review quality and is 170.1 KiB. All removed website PNGs were hash-matched to originals in the categorized `Generated Images` archive before removal. The archive remains unchanged at approximately 17.36 MiB.

## Verification

- `npm run build`: passed; the root page was statically exported.
- `npx oxlint app content components/landing`: passed with no landing-page findings.
- Desktop 1440 x 1000: no horizontal overflow, optimized image loaded, both motion layers running.
- Mobile 390 x 844: single-column layout, no horizontal overflow, pause control stopped both motion layers.
- Both external links point to `https://www.instagram.com/wearafterstory/` and retain safe new-tab attributes.
- Reduced-motion CSS hides motion controls/layers and keeps the static image visible.
- Focused source area contains nine small files totaling approximately 14 KiB, excluding images.

The full starter-wide lint command still reports issues in unused generated UI components. The landing page source is checked separately; these starter files do not enter the page build.

The failed first install left an empty `node_modules-incomplete-backup` directory shell on the FAT32 workspace. Its file payload was removed (0 MiB remains), but Windows denied deletion of some empty directory entries. It is ignored by the project and excluded from routine searches; the working `node_modules` installation is separate and healthy.

## Maintenance

Use `PROJECT_MAP.md` before website work. Small wording changes should touch only `content/site.ts`; motion tuning should touch only `components/landing/campaign.css`. Do not scan dependencies, generated output, image archives or purchase invoices unless the task directly requires them.
