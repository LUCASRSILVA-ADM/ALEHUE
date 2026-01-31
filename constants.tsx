
import { 
  Wifi, 
  Wind, 
  Coffee, 
  Waves, 
  Car, 
  MapPin, 
  Home, 
  Calendar, 
  Star,
  Mountain,
  Thermometer,
  Flame,
  Sunrise,
  ShieldCheck,
  Sparkles,
  Compass
} from 'lucide-react';
import { Cabin, Amenity, Review, Language } from './types';

export const HERO_WORDS: Record<Language, string[]> = {
  pt: ["a paz.", "a natureza.", "o silêncio.", "a tranquilidade.", "o descanso.", "a alma."],
  es: ["la paz.", "la naturaleza.", "el silencio.", "la tranquilidad.", "el descanso.", "el alma."]
};

export const UI_STRINGS: Record<Language, any> = {
  pt: {
    find: "encontre",
    explore: "EXPLORAR AS CASAS",
    essence: "A Essência da Patagônia",
    heroDesc: "Refúgios artesanais em madeira e pedra, debruçados sobre as águas do Nahuel Huapi.",
    collection: "Coleção Privada",
    archTitle: "Arquitetura que respira.",
    cabinDesc: "Cada refúgio conta sua própria história de silêncio.",
    liveRefuge: "VIVER ESTE REFÚGIO",
    night: "/ noite",
    guests: "Hóspedes",
    discover: "Descubra a Patagônia",
    memoryTitle: "Mais que uma estadia, uma memória eterna.",
    experienceDesc: "Localizada no coração do Circuito Chico, a Alehue é o ponto de partida perfeito para quem busca aventura ou o silêncio restaurador.",
    testimonials: "Relatos",
    voices: "Vozes de Alehue",
    locationTitle: "No coração do Nahuel Huapi",
    locationDesc: "Av. Bustillo 11.500. Apenas a 15 minutos do Centro Cívico e a passos do Hotel Llao Llao.",
    howToGet: "COMO CHEGAR",
    period: "Período",
    dates: "Datas",
    guestLabel: "2 Pers.",
    refuge: "Refúgio",
    book: "RESERVAR",
    copyright: "© 2025 Alehue Cabañas. Todos os direitos reservados.",
    slogan: "Sinta o coração da Patagônia bater."
  },
  es: {
    find: "encuentra",
    explore: "EXPLORAR LAS CASAS",
    essence: "La Esencia de la Patagonia",
    heroDesc: "Refugios artesanales en madera y piedra, asomados a las aguas del Lago Nahuel Huapi.",
    collection: "Colección Privada",
    archTitle: "Arquitectura que respira.",
    cabinDesc: "Cada refugio cuenta su propia historia de silencio.",
    liveRefuge: "VIVIR ESTE REFUGIO",
    night: "/ noche",
    guests: "Huéspedes",
    discover: "Descubra la Patagonia",
    memoryTitle: "Más que una estadía, una memoria eterna.",
    experienceDesc: "Ubicada en el corazón del Circuito Chico, Alehue es el punto de partida perfecto para quienes buscan aventura o el silencio restaurador.",
    testimonials: "Relatos",
    voices: "Voces de Alehue",
    locationTitle: "En el corazón del Nahuel Huapi",
    locationDesc: "Av. Bustillo 11.500. A sólo 15 minutos del Centro Cívico y a pasos del Hotel Llao Llao.",
    howToGet: "CÓMO LLEGAR",
    period: "Periodo",
    dates: "Fechas",
    guestLabel: "2 Pers.",
    refuge: "Refugio",
    book: "RESERVAR",
    copyright: "© 2025 Alehue Cabañas. Todos los derechos reservados.",
    slogan: "Siente el corazón de la Patagonia latir."
  }
};

export const CABINS: Cabin[] = [
  {
    id: 'casa-grande',
    name: 'Casa Grande',
    description: {
      pt: 'Nossa residência principal. Arquitetura rústica-chic com amplos ventanais, lareira de pedra e capacidade para grandes famílias.',
      es: 'Nuestra residencia principal. Arquitectura rústica-chic con amplios ventanales, hogar de piedra y capacidad para grandes familias.'
    },
    capacity: 8,
    price: 650,
    image: 'https://alehue.com.ar/wp-content/uploads/2018/12/ALEHUE019.jpg',
    amenities: {
      pt: ['Lareira Central', 'Cozinha Gourmet', 'Vista Lago'],
      es: ['Hogar Central', 'Cocina Gourmet', 'Vista al Lago']
    }
  },
  {
    id: 'casa-huespedes',
    name: 'Casa de Huéspedes',
    description: {
      pt: 'Um refúgio íntimo e acolhedor. Ideal para casais ou pequenas famílias, mantendo a essência da madeira.',
      es: 'Un refugio íntimo y acogedor. Ideal para parejas o familias pequeñas, manteniendo la esencia de la madera.'
    },
    capacity: 4,
    price: 420,
    image: 'https://alehue.com.ar/wp-content/uploads/2018/12/DSC_5917-1.jpg',
    amenities: {
      pt: ['Deck Privativo', 'Calefação Central', 'Estar Integrado'],
      es: ['Deck Privado', 'Calefacción Central', 'Estar Integrado']
    }
  }
];

export const AMENITIES: Amenity[] = [
  { id: 'wifi', label: { pt: 'Wi-Fi 6', es: 'Wi-Fi 6' }, icon: 'Wifi' },
  { id: 'heating', label: { pt: 'Calefação', es: 'Calefacción' }, icon: 'Thermometer' },
  { id: 'coffee', label: { pt: 'Café', es: 'Café' }, icon: 'Coffee' },
  { id: 'service', label: { pt: 'Serviço', es: 'Servicio' }, icon: 'Sparkles' },
  { id: 'safe', label: { pt: 'Estacion.', es: 'Estacion.' }, icon: 'Car' }
];

export const EXPERIENCE_FEATURES: Record<Language, any[]> = {
  pt: [
    { title: 'Trekking', icon: Compass, desc: 'Trilhas direto das cabanas rumo ao topo.' },
    { title: 'Chocolates', icon: Coffee, desc: 'A capital nacional do chocolate artesanal.' },
    { title: 'Esqui', icon: Mountain, desc: 'A 20 min do Cerro Catedral.' },
    { title: 'Natureza', icon: Wind, desc: 'Ar puro e a energia do Lago.' }
  ],
  es: [
    { title: 'Trekking', icon: Compass, desc: 'Senderos directo desde las cabañas hacia la cima.' },
    { title: 'Chocolates', icon: Coffee, desc: 'La capital nacional del chocolate artesanal.' },
    { title: 'Esquí', icon: Mountain, desc: 'A 20 min del Cerro Catedral.' },
    { title: 'Naturaleza', icon: Wind, desc: 'Aire puro y la energía del Lago.' }
  ]
};

export const REVIEWS: Review[] = [
  {
    author: 'Alessandra V.',
    rating: 5,
    text: {
      pt: 'A qualidade da madeira e o cuidado com cada detalhe nos fazem sentir em uma verdadeira casa de montanha.',
      es: 'La calidad de la madera y el cuidado en cada detalle nos hacen sentir en una verdadera casa de montaña.'
    },
    date: { pt: 'Fevereiro 2025', es: 'Febrero 2025' }
  }
];

export const ICON_MAP: Record<string, any> = {
  Wifi, Wind, Coffee, Waves, Car, MapPin, Home, Calendar, Star, Mountain, Thermometer, Flame, Sunrise, ShieldCheck, Sparkles, Compass
};
