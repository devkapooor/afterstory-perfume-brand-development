# AFTERSTORY Preliminary Costing

## Sales and Receivables Status

Updated 2026-09-21 from founder-reported status. Do not infer missing selling prices or payment receipt.

| Batch | Product | Quantity | Fulfilment | Payment | Selling price |
| --- | --- | ---: | --- | --- | ---: |
| LL-P01 + pending production | Shahzar order: LAST LOOK, LAST CALL, TOBACCO BLOOM 50 mL | 3 | Confirmed; LAST LOOK reserved, 2 pending production | Not recorded | INR 1,199 total, delivery included |
| Pending production | Friend bundle: FIRST LIGHT, WHITE MUSK, CANDY FLOSS 50 mL | 3 | Order confirmed; not yet produced | Receipt not yet recorded | INR 1,199 total, delivery included |
| CL-P01 | CLEAN 8 mL | 15 | Sold to New Shop | Received | INR 60/bottle; INR 900 total |
| MK-P01 | MUSK 8 mL | 15 | Sold to New Shop | Received | INR 60/bottle; INR 900 total |
| TBD | EMBER 8 mL | 5 | Sold to New Shop | Received | INR 60/bottle; INR 300 total |
| SC-P01 | SLOW CARAMEL 50 mL | 1 | Sold | Received / not pending | INR 200 |
| QS-P01 | QUIET SHADOW 50 mL | 2 | Delivered | Pending | Not recorded |
| AS-OE-250912-PRX-T01 | OLD ESTATE 50 mL, premix comparison | 1 | Delivered | Pending | Not recorded |
| AS-OE-250912-ALC-T01 | OLD ESTATE 50 mL, alcohol comparison | 1 | Delivered | Pending | Not recorded |

Version 1, 2026-09-06. Decision-support estimates, not approved formulas, verified margins, or net profit. All INR. Current purchase index is `PURCHASES.csv`; detailed pre-consolidation invoice baseline is in `99_Archive/Inventory_Old/INVENTORY.md`.

## Confirmed Commercial Inputs

Preparation-session consumables, founder-reported 2026-09-22: 2 gloves at INR 9 total and 3 syringes at INR 20 total were used, for INR 29 known consumables. A further 40 mL alcohol was used for cleaning, but its source (plain perfumer's alcohol or premix) is not yet confirmed; do not include an alcohol cost until confirmed. Allocate the final session cost only to the batches actually prepared in this session.

Current packaging update: the 50 mL label is now a 138 x 40 mm wrap, superseding the 138 x 45 mm wrap and earlier 50 x 50 mm concept. Founder-reported 2026-09-15 print run: 26 stickers, 2 for each of 13 chapters, cost INR 100 total, or INR 3.846 per sticker. Exact quantities per fragrance and bottle size are TBD; no table in this document constitutes a finalized production allocation.

- Founder directed that transportation to the offline counter be excluded from 8 mL costing. No counter-transport allowance is deducted; this does not assert that actual transportation is free. Existing INR 1500 inward freight remains in inventory landed cost. Online courier and customer delivery charges remain unchanged.

- Regular GST registration confirmed by founder. The original results below remain pre-output-tax scenarios, not current margin estimates. See the GST update below before using them.

- 8 mL supply price 50 total including GST, founder-confirmed; retailer price 79. The founder receives 50, not 79. Retailer cash spread is 29 before their expenses and tax accounting.
- 50 mL target selling price 499, conditional on costing.
- Prepaid orders only. Delivery charge 99 when merchandise value is <=899; zero when >899.
- Single-bottle receipt 598; two-bottle receipt 998. Future discount treatment is undecided; examples contain no discounts.

## Explicit Assumptions

Latest quote update: founder reports INR 60 per A3 sheet, printed and cut, vinyl described as waterproof. Founder has approved 30 labels per sheet as the working costing assumption for 60 x 55 mm pocket labels. The printer has NOT confirmed this yield. Adopted unit cost = 60/30 = INR 2 per 8 mL sticker, before any unconfirmed extras or spoilage.

All pocket-bottle tables below now use INR 2 per sticker, replacing the previous INR 1 allowance. The 50 mL sticker cost is INR 100/26 = INR 3.846 per sticker, founder-confirmed from the 2026-09-15 print run.

INR 1 would require 60 labels per sheet. Their combined area, 60*60*55 = 198000 square mm, exceeds standard A3 area 124740 square mm, so 60 full-size labels cannot fit on one standard A3 sheet, regardless of arrangement.

Printer quantity per sheet, included taxes, minimum order, usable print area, bleed/gaps and spoiled-sheet policy remain unconfirmed. Quote is a founder-reported supplier price. Do not infer alcohol/rub resistance from the description waterproof.

| Unverified input | Working estimate |
| --- | ---: |
| Oil concentration by weight | 25% w/w, founder-confirmed 2026-09-12 for production going forward |
| Oil density | 0.90 g/mL; measure each lot |
| Liquid overage/wastage allowance | 3% of ingredient cost |
| 8 mL label | 2/bottle: reported 60/sheet divided by assumed 30 labels |
| 8 mL filling labour | 2/bottle |
| 50 mL label | 3.846/bottle: 100 total print cost divided by 26 stickers |
| 50 mL folding carton | 20/bottle |
| 50 mL filling/packing labour | 8/bottle |
| Plain perfumer's alcohol | 590/L, founder-directed Amazon rate; invoice-level cost pending |
| Single order protective shipping pack | 15/order |
| Two-bottle protective shipping pack | 20/order |
| Single courier charge paid by brand | 90/order |
| Two-bottle courier charge paid by brand | 110/order |
| Payment processing | 2.5% of total collected, illustrative all-in allowance |

These are modelling allowances; only the A3 print-and-cut price is founder-reported supplier pricing, with yield still assumed. No assumption of free founder labour. Purchase invoices are by mass, and production concentration is now weight-by-weight. Historical volume-mixed samples should not be used as the production formula.

## Reproducible Formulas

K = 19043 / 17543.82. Oil landed cost/g = invoice line cost / grams * K. Base landed cost/mL = 0.413 * K.

For bottle nominal size V, oil fraction C, density D, oil price G and base price B:

Liquid cost = (V*C*D*G + V*(1-C)*B) * 1.03.

8 mL packed cost = liquid cost + 9.44*K + 2 label + 2 labour.

50 mL packed cost = liquid cost + 46*K + 3.846 label + 20 carton + 8 labour.

Single order remainder = 598 - packed cost - 15 shipping pack - 90 courier - 598*0.025.

Two-bottle remainder = 998 - 2*packed cost - 20 shipping pack - 110 courier - 998*0.025.

## Results by Candidate

| Oil scenario | 8 mL packed | Remainder from 50 wholesale | 50 mL packed | Single order remainder | Two identical bottles remainder |
| --- | ---: | ---: | ---: | ---: | ---: |
| CK One | 27.94 | 22.06 | 168.52 | 309.53 | 506.01 |
| Tobacco Vanilla | 27.47 | 22.53 | 165.55 | 312.50 | 511.95 |
| White Musk | 26.52 | 23.48 | 159.61 | 318.44 | 523.82 |
| Flora, pooled-cost illustration | 26.03 | 23.97 | 156.57 | 321.48 | 529.91 |
| Oud Wood | 31.27 | 18.73 | 189.30 | 288.75 | 464.46 |
| Bianco Latte | 30.79 | 19.21 | 186.33 | 291.72 | 470.39 |
| D&G Devotion | 28.89 | 21.11 | 174.45 | 303.60 | 494.14 |
| Ajmal Aristocrat | 42.19 | 7.81 | 257.57 | 220.48 | 327.91 |
| Musk Rijali Spl | 64.51 | -14.51 | 397.08 | 80.97 | 48.89 |

## Provisional COGS Using Current Fill-Weight Targets

Updated 2026-09-22. These figures use the working targets in `PRODUCTION_AND_TESTING.md`: 40.3 g finished blend per 50 mL bottle and 6.45 g per 8 mL bottle, both at 25% w/w oil. Premix volume is converted using the recorded 0.655 g/mL density. Existing packaging, label, carton, labour, landed-cost, and 3% liquid-wastage allowances remain unchanged.

| Oil scenario | 50 mL packed COGS | 8 mL packed COGS |
| --- | ---: | ---: |
| CK One | 165.26 | 27.61 |
| Tobacco Vanilla | 162.60 | 27.18 |
| White Musk | 157.28 | 26.33 |
| Flora, pooled-cost illustration | 154.56 | 25.90 |
| Oud Wood | 183.87 | 30.59 |
| Bianco Latte | 181.21 | 30.16 |
| D&G Devotion | 170.57 | 28.46 |
| 1 Million / LAST LOOK | 172.20 | 28.72 |
| Issey Miyake Man / YUZU WAVE | 169.54 | 28.29 |
| Gucci Guilty Men / LAST CALL | 169.54 | 28.29 |
| Perfume Cartel Bombshell / GOLDEN ORCHID | 161.57 | 27.02 |
| Ajmal Aristocrat | 245.01 | 40.37 |
| Musk Rijali Spl | 369.95 | 60.37 |

These are provisional because the fill weights remain unvalidated and fragrance-specific. The 1 Million, Issey Miyake Man, Gucci Guilty Men, and Bombshell rows use their recorded Perfume Cartel invoice line costs plus the established landed-cost allocation. GOLDEN ORCHID's GO-P01 batch itself remains a concentration test because its oil was measured by volume. Flora remains a pooled-cost illustration until the Zaveri lot is physically reconciled.

Flora uses (495.60+400)/200*K per gram for illustration; production must use the selected supplier lot's actual cost. No Flora/White Musk blending ratio is assumed.

Remainders are BEFORE output-tax reconciliation, advertising, damage/refunds, counter replenishment delivery, equipment depreciation, fixed overheads, website/domain fees, testing and any regulatory costs. They are not net profit or spendable cash. Input invoice tax is included as paid; output tax and recoverable input tax require confirmation before commercial sign-off. No legal tax conclusion is made here.

## Sensitivity and Decision

- At densities 0.80 to 1.00 g/mL, CK One 50 mL packed cost is approximately 160.93 to 176.10. At 0.90 it is 168.52. Density matters but is not the largest unresolved online expense.
- Every extra 10 per bottle in packaging lowers a single-order remainder by 10 and a pair-order remainder by 20.
- Every extra 20 courier charge lowers order remainder by 20.
- Proposed 50 mL label + carton target is <=25/bottle, plus the existing landed bottle cost of 49.93. This is a quote target, not a guaranteed market price.
- 499 remains a plausible target for ordinary candidate oils under these assumptions. Confirm tax treatment, real packaging/courier/payment costs and chosen recipes before locking margin.
- Musk Rijali Spl is unsuitable for the 50 wholesale pocket format under this scenario. Keep it as a small premium test material, not an approved launch scent.
- Existing stock still carries cost even though paid. The 5000 budget funds new cash outlays; it is not profit and does not replenish consumed oil automatically.

## Validation Needed

## GST Update: Regular Registration

Checked 2026-09-06: official CBIC rate table lists perfumes/toilet waters, HSN 3303, at 18% total GST. Source: https://cbic-gst.gov.in/gst-goods-services-rates.html . The official 2026 state consolidation also lists 18%: https://comtax.wb.gov.in/GST/GST_PPU/CONSOLIDATED%20GST%20RATE%20CHART%20OF%20GOODS_20260416.pdf . Final product classification should match the actual product.

Price interpretation for costing: INR 499 customer selling price is assumed tax-inclusive. Taxable value = inclusive price / 1.18; GST = inclusive price - taxable value.

| Price case | Taxable product value | GST | Total product receipt |
| --- | ---: | ---: | ---: |
| 50 mL at inclusive 499 | 422.88 | 76.12 | 499.00 |
| Two 50 mL at inclusive 998 | 845.76 | 152.24 | 998.00 |
| 8 mL supply 50 inclusive, founder-confirmed | 42.37 | 7.63 | 50.00 |

Do not treat GST collected as profit. Delivery charge tax treatment remains to be established in the full order model; the 499 row covers the product only, not the 598 delivered order.

AR3 invoice shows 2186.82 GST potentially relevant to input credit, not a verified available credit. Do not automatically subtract this from inventory cost or count it as cash. Check invoice eligibility and reconciliation before applying credits. The second invoice and INR 1500 freight have no supported tax breakup in the supplied records, so no credit is assumed for them. Regular registration alone does not prove every input credit is available.

Historical New Shop Omaxe price note: INR 50 total, not INR 50 plus GST. This is superseded for current quoting by the founder-confirmed INR 60 New Shop price in `PRICING_MASTER.csv`.

### Pocket Bottle: Output GST Deducted, No Input Credit Yet

Provisional remainder = 50/1.18 - gross packed cost. This intentionally retains input taxes in cost until eligibility is verified. It is not net profit and excludes counter delivery, overheads and other exclusions already listed. Underlying density, liquid recipe, label and labour assumptions remain unchanged.

| Scenario | Gross packed cost | Remainder after output GST, before other expenses |
| --- | ---: | ---: |
| CK One | 27.94 | 14.43 |
| Tobacco Vanilla | 27.47 | 14.91 |
| White Musk | 26.52 | 15.86 |

Calculated using unrounded scenario costs and 50/1.18; rounded display values can differ by 0.01 when subtracted. Counter transportation is deliberately excluded at the founder's request, not a pending input for this model. Next: verify actual label yield/cost, then recognize only verified eligible input credits without double counting.

### Other Validation Needed

Replace assumed density and concentration with validated recipe data; select supplier lot; get label/carton MOQ and tax-inclusive delivered quotes; obtain courier acceptance/rates for finished perfumes; choose payment route; establish tax treatment; record actual wastage and labour time.
