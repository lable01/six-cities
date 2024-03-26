import { TOfferItemType } from './offer-item.ts';
import { TUserType } from './user-type';

export type TOfferDetailProps = TOfferItemType & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: TUserType;
  images: string[];
  maxAdults: number;
};
