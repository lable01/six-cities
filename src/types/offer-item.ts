import { TLocationProps } from './location';
import { TCityProps } from './city';

export type TOfferItemType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCityProps;
  location: TLocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
