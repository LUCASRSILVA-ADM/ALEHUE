
export type Language = 'pt' | 'es';

export interface Cabin {
  id: string;
  name: string;
  description: Record<Language, string>;
  capacity: number;
  price: number;
  image: string;
  amenities: Record<Language, string[]>;
}

export interface Amenity {
  id: string;
  label: Record<Language, string>;
  icon: string;
}

export interface Review {
  author: string;
  rating: number;
  text: Record<Language, string>;
  date: Record<Language, string>;
}
