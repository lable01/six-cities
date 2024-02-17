import { TOfferFavoritesType } from 'mocks/offer-favorites.type.ts';
import { TUser } from 'mocks/user-type.ts';

export type TOffer = TOfferFavoritesType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};
