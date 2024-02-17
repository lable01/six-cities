import { TLocation } from 'mocks/location-type.ts';
import { TCity } from 'mocks/city-type.ts';

export type TOfferFavoritesType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
