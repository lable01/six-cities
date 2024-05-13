import { TCityName } from 'types/city-name.ts';
import { TOfferItem } from 'types/offer-item.ts';
import { RequestStatus } from '../const.ts';

export type TOffersState = {
  city: TCityName;
  offers: TOfferItem[];
  sort: number;
  status: RequestStatus;
};
