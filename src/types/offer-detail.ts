import { TOfferItem } from './offer-item.ts';
import { TUser } from './user.ts';

export type TOfferDetail = TOfferItem & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};
