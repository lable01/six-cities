import { TOfferItemType } from './offer-item.ts';
import { TUser } from './user-type';

export type TOfferDetail = TOfferItemType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUser;
  images: string[];
  maxAdults: number;
};
