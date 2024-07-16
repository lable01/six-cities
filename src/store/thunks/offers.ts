import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOfferItem } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, ErrorToast } from 'const/const.ts';
import { TOfferDetail } from 'types/offer-detail.ts';
import { toast } from 'react-toastify';

const fetchAllOffers = createAsyncThunk<
  TOfferItem[],
  void,
  { extra: AxiosInstance }
>('fetchOffers/all', async (_arg, { extra: api }) => {
  try {
    const response = await api.get<TOfferItem[]>(EndPoint.Offers);
    return response.data;
  } catch (err) {
    toast.error(ErrorToast.FetchAllOffers);
    throw err;
  }
});

const fetchOffer = createAsyncThunk<
  TOfferDetail,
  string,
  { extra: AxiosInstance }
>('fetchOffers/one', async (offerID, { extra: api }) => {
  try {
    const response = await api.get<TOfferDetail>(
      `${EndPoint.Offers}/${offerID}`,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchOffer);
    throw error;
  }
});

const fetchNearOffers = createAsyncThunk<
  TOfferItem[],
  string,
  { extra: AxiosInstance }
>('fetchOffers/near', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<TOfferItem[]>(
      `${EndPoint.Offers}/${offerId}${EndPoint.Nearby}`,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchNearOffers);
    throw error;
  }
});

export { fetchAllOffers, fetchOffer, fetchNearOffers };
