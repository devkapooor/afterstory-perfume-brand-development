export type V2Product = {
  code: string;
  name: string;
  profile?: string;
  story?: string;
  image?: string;
  launch: boolean;
  stock: number;
};

export const v2Products: V2Product[] = [
  {
    code: '02',
    name: 'TOBACCO BLOOM',
    profile: 'Tobacco / Vanilla / Warm Woods',
    story: 'Tobacco bloom, lingering softly after the evening ends.',
    image: '/images/shop/tobacco-bloom-v1.webp',
    launch: true,
    stock: 2,
  },
  {
    code: '03',
    name: 'FIRST LIGHT',
    profile: 'Citrus / Green Florals / Clean Woods',
    story: 'First light, finding its way through quiet mornings.',
    image: '/images/shop/first-light-v1.webp',
    launch: true,
    stock: 1,
  },
  {
    code: '06',
    name: 'WHITE MUSK',
    profile: 'Powder / White Florals / Musk',
    story: 'White musk, resting softly against warm bare skin.',
    image: '/images/shop/white-musk-v1.webp',
    launch: true,
    stock: 1,
  },
];

export const v2Commerce = {
  price: 499,
  mrp: 799,
  deliveryFee: 100,
  freeDeliveryAbove: 999,
  format: '50 ML / Extrait de Parfum / 25% w/w',
  delivery:
    'India-wide delivery. Dispatch in 2-3 days, then delivery in another 2-3 days.',
  payment:
    'Prepaid orders only. COD is unavailable. Payment setup is coming soon.',
  returns: 'No returns or refunds are processed.',
  email: 'afterstory@gmail.com',
  whatsapp: '9161666633',
};
