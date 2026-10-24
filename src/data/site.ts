// Single source of truth for business details. Replace every TODO with the
// real value from the current WordPress site before launch.
export const site = {
  name: 'Ampov Distillery',
  tagline: 'Spiritueux artisanaux', // TODO: reprendre la baseline du site actuel
  description:
    'Ampov Distillery — distillerie artisanale. Découvrez nos spiritueux, notre savoir-faire et nos visites.', // TODO
  url: 'https://ampov-distillery.com',
  locale: 'fr_FR',
  email: 'contact@ampov-distillery.com', // TODO: vérifier
  phone: '', // TODO
  address: { street: '', city: '', postalCode: '', country: '' }, // TODO
  social: {
    instagram: '', // TODO
    facebook: '', // TODO
  },
};

export const nav = [
  { href: '/', label: 'Accueil' },
  { href: '/la-distillerie/', label: 'La distillerie' },
  { href: '/produits/', label: 'Nos produits' },
  { href: '/contact/', label: 'Contact' },
];
