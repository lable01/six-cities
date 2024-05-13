import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOfferItem } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint } from '../../const.ts';

const fetchAllOffers = createAsyncThunk<
  TOfferItem[],
  void,
  { extra: AxiosInstance }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  try {
    const response = await api.get<TOfferItem[]>(EndPoint.Offers);
    return response.data;
  } catch (error) {
    console.error('Error fetching offers:', error);
    throw error;
  }
});

export { fetchAllOffers };
