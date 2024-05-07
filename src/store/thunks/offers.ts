import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOfferItem } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint } from '../../const.ts';

const fetchAllOffers = createAsyncThunk<
  TOfferItem[],
  void,
  { extra: AxiosInstance }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  const response = await api.get<TOfferItem[]>(EndPoint.Offers);
  return response.data;
});

export { fetchAllOffers };
