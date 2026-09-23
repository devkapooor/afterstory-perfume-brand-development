export type V2Product = {
  code: string;
  name: string;
  profile?: string;
  story?: string;
  description?: string;
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
    description:
      'A warm evening fragrance of tobacco, vanilla, and soft woods.',
    image: '/images/shop/tobacco-bloom-v1.webp',
    launch: true,
    stock: 2,
  },
  {
    code: '03',
    name: 'FIRST LIGHT',
    profile: 'Citrus / Green Florals / Clean Woods',
    story: 'First light, finding its way through quiet mornings.',
    description:
      'A bright, clean fragrance of citrus, green florals, and clean woods.',
    image: '/images/shop/first-light-v1.webp',
    launch: true,
    stock: 1,
  },
  {
    code: '06',
    name: 'WHITE MUSK',
    profile: 'Powder / White Florals / Musk',
    story: 'White musk, resting softly against warm bare skin.',
    description:
      'A soft, close-to-skin fragrance of powder, white florals, and musk.',
    image: '/images/shop/white-musk-v1.webp',
    launch: true,
    stock: 1,
  },
];

export type V2Commerce = {
  price: number;
  mrp: number;
  deliveryFee: number;
  freeDeliveryAbove: number;
  format: string;
  delivery: string;
  payment: string;
  returns: string;
  email: string;
  whatsapp: string;
};

export const v2Commerce: V2Commerce = {
  price: 599,
  mrp: 799,
  deliveryFee: 100,
  freeDeliveryAbove: 999,
  format: '50 ML / Extrait de Parfum / 25% w/w',
  delivery:
    'India-wide delivery. Dispatch in 2-3 days, then delivery in another 2-3 days.',
  payment:
    'Prepaid orders only. COD is unavailable. Payment setup is coming soon.',
  returns:
    'Delivery issues must be reported within 48 hours with an unboxing video.',
  email: 'afterstory@gmail.com',
  whatsapp: '9161666633',
};
