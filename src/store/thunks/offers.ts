import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOfferItem } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint } from '../../const.ts';

const fetchAllOffers = createAsyncThunk<
  TOfferItem[],
  void,
  { extra: AxiosInstance }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  const responce = await api.get<TOfferItem[]>(EndPoint.Offers);
  return responce.data;
});

export { fetchAllOffers };
