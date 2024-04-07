import { TUser } from './user.ts';
import { TCity } from 'types/city.ts';
import { TLocation } from 'types/location.ts';

export type TOfferDetail = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};
