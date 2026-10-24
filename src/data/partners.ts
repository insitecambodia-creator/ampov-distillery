// Points de vente / lieux de dégustation (ex-listing Crocoblock « Où nous trouver »).
export type Partner = {
  name: string;
  type: 'e-shop' | 'Restaurant' | 'Bar' | 'Caviste' | 'Hotel';
  address?: string;
  city?: string;
  url?: string;
  logo?: string; // chemin sous src/assets/ — le logo est omis s'il n'existe pas
};

export const regions: { title: string; partners: Partner[] }[] = [
  {
    title: 'Acheter / Déguster en France & Europe',
    partners: [
      { name: 'Maison Ferroni', type: 'e-shop', city: 'France', url: 'https://www.ferroni.shop/', logo: 'partners/maison-ferroni.webp' },
      { name: 'Excellence Rhum', type: 'e-shop', city: 'France', url: 'https://www.excellencerhum.com/en/1260_ampov-distillery', logo: 'partners/logo-excellence.png' },
      { name: 'A La Croisée des Chemins', type: 'Restaurant', address: '1 Rte du Hohwald, 67140 Eichhoffen', city: 'France', url: 'https://www.a-la-croisee-des-chemins.fr/', logo: 'partners/croisee-des-chemins.webp' },
      { name: 'La Maison du Rhum Lyon', type: 'Caviste', address: '78 Rue de la Part-Dieu, 69003 Lyon', city: 'France', url: 'https://www.lamaisondesrhums.fr/', logo: 'partners/maison-du-rhum-lyon.jpg' },
      { name: 'Les Garnements', type: 'Restaurant', address: '36a Rte de la Meinau, 67100 Strasbourg', city: 'France', url: 'https://www.les-garnements.fr/', logo: 'partners/les-garnements.webp' },
      { name: 'L’Arrangé des Alchimistes', type: 'Caviste', address: '1 B Quai des Anciens Abattoirs, 67120 Molsheim', city: 'France', url: 'https://www.lesalchimistes.eu/', logo: 'partners/alchimistes.jpg' },
    ],
  },
  {
    title: 'Acheter / Déguster au Cambodge',
    partners: [
      { name: 'Khmer Poulart', type: 'Restaurant', address: '89 Sala Kamreuk Rd, Krong Siem Reap 17254', city: 'Siem Reap', url: 'https://lakhmerepoulart.com/', logo: 'partners/khmer-poulart.jpeg' },
      { name: 'La Guinguette', type: 'Restaurant', address: 'Crow’s Nest Rd, Krong Siem Reap', city: 'Siem Reap', url: 'https://laguinguettedesiemreap.com/index-en.html', logo: 'partners/guinguette.png' },
      { name: 'Infusion Bar', type: 'Bar', city: 'Siem Reap' },
      { name: 'BAR 43', type: 'Bar', city: 'Siem Reap' },
      { name: 'Authentic Khmer Village', type: 'Restaurant', address: 'Sombai Road, Salakamreuk Village, Siem Reap', city: 'Siem Reap', url: 'https://authentic-khmer-village.com/', logo: 'partners/authentic-khmer-village.jpg' },
      { name: 'Wisewood Liquor Store', type: 'Caviste', address: 'NR6, Krong Siem Reap', city: 'Siem Reap', logo: 'partners/wisewood.jpg' },
      { name: 'Khmer Gourmet', type: 'Restaurant', address: 'Alley W, Krong Siem Reap', city: 'Siem Reap', url: 'https://www.khmergourmetcookingclass.com/', logo: 'partners/khmer-gourmet.png' },
      { name: 'Cohiban Atmosphere', type: 'Bar', address: '92, Rukhak Vithei, Phnom Penh', city: 'Phnom Penh', url: 'https://www.facebook.com/caphnompenh/', logo: 'partners/cohiba.jpg' },
      { name: 'Kanika Boat', type: 'Restaurant', address: 'En face de l’hôtel Himawari, côté rivière', city: 'Phnom Penh', url: 'https://www.kanika-boat.com/en', logo: 'partners/kanika-boat.jpg' },
      { name: 'Elephant Bar', type: 'Bar', address: '92 Rukhak Vithei', city: 'Phnom Penh', url: 'https://www.raffles.com/phnom-penh/dining/elephant-bar/', logo: 'partners/raffles.jpg' },
      { name: 'Deli Bistro', type: 'Restaurant', address: 'House 13, Street 178', city: 'Phnom Penh', url: 'https://www.restaurant-cambodia.com/restaurants/le-deli-bistro-gourmet/', logo: 'partners/deli-bistro.jpg' },
      { name: 'Bistro de la Poste', type: 'Restaurant', address: '24Eo Preah Ang Non (St. 102)', city: 'Phnom Penh', url: 'https://www.restaurant-cambodia.com/restaurants/le-bistrot-de-la-poste/', logo: 'partners/bistro-de-la-poste.jpg' },
      { name: 'Pépé Bistro', type: 'Restaurant', city: 'Phnom Penh', logo: 'partners/pepe-bistro.jpg' },
      { name: 'Malis', type: 'Restaurant', address: 'No. 136 Norodom Blvd', city: 'Phnom Penh', url: 'https://malis.thalias.com.kh/', logo: 'partners/malis.jpg' },
      { name: 'Sofitel Phnom Penh', type: 'Hotel', address: 'Old August Site, 26 Street Sothearos, Phnom Penh 12301', city: 'Phnom Penh', url: 'https://www.sofitel-phnompenh-phokeethra.com/', logo: 'partners/sofitel.png' },
      { name: 'The Raffles', type: 'Hotel', city: 'Phnom Penh', logo: 'partners/raffles.jpg' },
      { name: 'L’épicerie fine', type: 'Caviste', address: '101 EO Preah Sisowath Quay', city: 'Phnom Penh', logo: 'partners/epicerie-fine.jpg' },
      { name: 'Lush', type: 'Caviste', city: 'Phnom Penh' },
      { name: 'Shack Collective', type: 'Caviste', address: '#189 Preah Ang Yukanthor Street (19)', city: 'Phnom Penh', logo: 'partners/shack-collective.png' },
      { name: 'Kabas', type: 'Caviste', city: 'Phnom Penh' },
      { name: 'Aéroport de Phnom Penh', type: 'Caviste', city: 'Phnom Penh', logo: 'partners/aeroport-phnom-penh.jpg' },
      { name: 'The Warehouse', type: 'Caviste', address: '#32E0, Preah Ang Phanavong St. (240)', city: 'Phnom Penh', url: 'https://www.thewinemerchants.com.kh/', logo: 'partners/the-warehouse.jpg' },
    ],
  },
  {
    title: 'Acheter / Déguster au Japon',
    partners: [
      { name: 'Liquors Hasegawa', type: 'Caviste', address: '2-1 Yaesu, Chuo-ku, Tokyo — Yaesu Underground Shopping Mall', city: 'Japon', url: 'https://www.liquors-hasegawa.com/bind/ampov.html' },
    ],
  },
];
