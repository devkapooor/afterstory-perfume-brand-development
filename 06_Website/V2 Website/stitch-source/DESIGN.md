---
name: Nocturnal Gallery Editorial
colors:
  surface: '#f9f9fd'
  surface-dim: '#d9dade'
  surface-bright: '#f9f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f7'
  surface-container: '#ededf2'
  surface-container-high: '#e8e8ec'
  surface-container-highest: '#e2e2e6'
  on-surface: '#1a1c1f'
  on-surface-variant: '#44474b'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f0f0f4'
  outline: '#75777c'
  outline-variant: '#c5c6cc'
  surface-tint: '#575f6b'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141c26'
  on-primary-container: '#7c8491'
  inverse-primary: '#bfc7d5'
  secondary: '#ac3400'
  on-secondary: '#ffffff'
  secondary-container: '#fb6732'
  on-secondary-container: '#5a1700'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#051e2b'
  on-tertiary-container: '#708797'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe3f1'
  primary-fixed-dim: '#bfc7d5'
  on-primary-fixed: '#141c26'
  on-primary-fixed-variant: '#3f4753'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#ffb59d'
  on-secondary-fixed: '#390b00'
  on-secondary-fixed-variant: '#832600'
  tertiary-fixed: '#cee6f8'
  tertiary-fixed-dim: '#b2cadc'
  on-tertiary-fixed: '#051e2b'
  on-tertiary-fixed-variant: '#334958'
  background: '#f9f9fd'
  on-background: '#1a1c1f'
  surface-variant: '#e2e2e6'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0em
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  title-editorial:
    fontFamily: EB Garamond
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  price-num:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system establishes an atmospheric, literary visual language modeled after contemporary nocturnal photography galleries. It rejects traditional perfume tropesâ€”there are no ornate filigrees, faux-vintage labels, gold foils, or warm organic papers. The aesthetic is cool, restrained, and deliberate: clinical precision framing evocative olfactive poetry.

The emotional experience balances the contemplative quiet of late-night art spaces with the effortless frictionlessness of top-tier modern digital commerce. Layouts prioritize generous spatial rhythm, absolute contrast, and razor-sharp structural lines over decorative embellishments. Interface elements remain silent until needed, permitting photography, prose, and scent compositions to command attention.

## Colors

The system uses an intentional dual-canvas approach:
- **Canvas Base:** Cool White (`#F7F9FA`) serves as the primary canvas for catalog browsing, product detail exploration, checkout, and general editorial reading.
- **Deep Nocturnal Surfaces:** Midnight (`#111923`) anchors immersive narrative chapters, hero viewports, interactive olfactive pyramids, and footers. Slate (`#23313C`) is used for secondary structural framing, drawers, and nested panels within nocturnal zones.
- **Typography & Structure:** Near-Black (`#17191C`) delivers razor-sharp legibility on light fields, while Steel Blue (`#839AAB`) supports secondary data, technical specifications, scent notes, and architectural dividers.
- **Signal Accent:** Ember Orange (`#FF6A35`) is restricted to strictly ~5% surface presenceâ€”reserved exclusively for primary purchase triggers, active state indicators, and editorial badges. Text overlaid on Ember Orange surfaces must always resolve to Near-Black (`#17191C`) for uncompromising contrast and optical punch.

Ivory, beige, tan, brown, gold, gradients, and paper skeuomorphism are strictly prohibited across all surfaces.

## Typography

The typographic hierarchy implements an intentional dialogue between literary romance and functional clarity:
- **Display & Headings:** `EB Garamond` introduces a contemplative, editorial cadence. Use roman styling predominantly; reserve italics for scent notes, olfactive excerpts, and literary quotations.
- **Operational UI & Product Data:** `Inter` handles prices, navigational targets, checkout forms, ingredient tables, and microcopy. Its utilitarian precision ensures instant legibility and anchors the high-end retail experience.
- **Labels & Metatags:** Render categorical indicators, chapter counts, notes (e.g., "BASE NOTES", "50 ML / 1.7 FL OZ"), and filter toggles in `label-caps` with uppercase styling and expanded tracking (+0.08em).

## Layout & Spacing

The structural layout relies on a strict 12-column grid on desktop screens (max width `1440px`), collapsing to 6 columns on tablet devices (`768px - 1023px`), and 4 columns on mobile viewports (`<768px`).

Grid margins expand dynamically to create breathing room around hero imagery and scent essays, evoking the curated isolation of fine-art photography prints:
- Desktop sections utilize `margin` (3rem) with wide internal section breaks (`space-3xl`).
- Elements within cards and lists align precisely to the structural gutter lines, avoiding offset padding that disrupts visual vertical axes.
- Tap targets on mobile retain minimum 44px active heights while maintaining an optical profile governed strictly by `space-sm` and `space-md` internal padding.

## Elevation & Depth

This system avoids ambient drop shadows, blurred glows, and stacked elevation tiers. Visual structure is articulated entirely through crisp structural delineation, contrast, and depth-of-field:

- **Borders & Dividers:** 1px hairline rules defined by Slate (`#23313C`) against dark surfaces and Steel Blue at 30% opacity (`rgba(131, 154, 171, 0.3)`) against light surfaces provide the singular structural framework.
- **Overlays & Drawers:** Modal sheets, quick-view flyouts, and the cart drawer utilize solid opaque backgrounds (Midnight `#111923` or Cool White `#F7F9FA`) framed with a razor-thin 1px perimeter outline.
- **Layering:** Visual prominence is achieved through scale, stark contrast, and negative space rather than physical depth metaphors.

## Shapes

The design system enforces a sharp geometric radius (`0px`). All buttons, input boxes, product cards, dialogue panels, and category chips possess uncompromising 90-degree corners.

This architectural sharpness reflects modern gallery architecture, photographic matting, and the monolithic silhouette of luxury glass flacons. Pill-shaped buttons, circular pill tags, and rounded container corners are strictly forbidden.

## Components

### Buttons
- **Primary CTA ("Add to Bag", "Complete Purchase"):** Solid Ember Orange (`#FF6A35`) fill, sharp corners (0px), text set in `Near-Black` (`#17191C`) Inter 13px uppercase with 0.08em letter spacing. Hover state transitions background color subtly to `#E85B28`. No shadows or outlines.
- **Secondary CTA ("Explore Chapter", "Discover Formulation"):** Transparent fill with 1px border. On light surfaces, border is Near-Black (`#17191C`); on Midnight surfaces, border is Cool White (`#F7F9FA`). Text matches border color. Hover shifts surface to a solid inverted fill.
- **Tertiary / Inline Actions:** Underlined text links using 1px stroke set 4px beneath the baseline, with hover shifting link color from Near-Black to Ember Orange.

### Inputs & Select Fields
- Form inputs feature a transparent background with a crisp 1px bottom border in Slate or Steel Blue. Active/focused inputs transition the bottom border to Ember Orange (`#FF6A35`) without a halo or focus ring.
- Labels sit above input fields in `label-caps` in Steel Blue (`#839AAB`), persisting in place rather than floating.

### Chips & Product Filtering
- Selection chips (e.g., volume sizes "50 ML", "100 ML", olfactive family toggles) are flat rectangular bounding boxes with 1px hairline borders.
- Default state: Unselected chips feature transparent backgrounds and Steel Blue borders with Near-Black or Cool White text.
- Active/Selected state: Solid Near-Black (`#17191C`) fill with Cool White text on light canvas; solid Cool White fill with Near-Black text on nocturnal surfaces.

### Cards & Catalog Modules
- **Product Card:** Borderless imagery floating directly on the Cool White canvas. Image frame ratio is 3:4. Scent name renders in `headline-sm` EB Garamond; volume, key notes, and price render in Inter `body-sm` and `price-num`. The card displays a persistent or quiet reveal on hover: a secondary lifestyle photograph replaces the packshot, accompanied by a razor-thin 1px top border above the purchase action.
- **Editorial Card:** Framing scent origin stories or archival photographs with an intentional 1px Slate border on Midnight panels.

### Fragrance Note Pyramid & Accord Indicators
- A bespoke component representing Top, Heart, and Base notes via a disciplined horizontal rule layout. Each tier is delineated by a 1px hairline border, marked with a `label-caps` prefix in Steel Blue, followed by ingredients in EB Garamond italic.
- Interactive accord sliders render as a minimalist 1px track in Slate with a solid 2px Ember Orange square thumb denoting note dominance.

### Checkboxes & Radios
- Square 14px boxes with 0px radius and 1px border. Selected state shows a filled Ember Orange interior with an inset 2px border gap in the canvas color.