import { site } from './site';

export const shop = {
  title: 'Shop AFTERSTORY | The First Collection',
  description: 'Discover First Light, Tobacco Bloom and White Musk. 50 ml extrait de parfum, with a launch price of INR 499 and MRP INR 799.',
  price: 499,
  mrp: 799,
  orderUrl: site.instagram,
  orderText: 'Order via Instagram',
  delivery: '₹99 delivery. Free above ₹899.',
  payment: 'Prepaid orders only.',
  banner: '/images/shop/three-scents-riverfront-v1.webp',
  products: site.launch.scents.map((scent, index) => ({
    ...scent,
    image: `/images/shop/${['first-light', 'tobacco-bloom', 'white-musk'][index]}-v1.webp`,
  })),
};
