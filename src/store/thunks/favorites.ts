import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOfferItem } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint } from '../../const.ts';
import { TFavoriteStatus } from 'types/favorite-status.ts';

const fetchFavorites = createAsyncThunk<
  TOfferItem[],
  undefined,
  { extra: AxiosInstance }
>('favorite/fetchAll', async (_arg, { extra: api }) => {
  const response = await api.get<TOfferItem[]>(EndPoint.Favorite);
  return response.data;
});

type ChangeProps = {
  offerId: string;
  status: TFavoriteStatus;
};

type ChangeResponse = {
  offer: TOfferItem;
  status: TFavoriteStatus;
};

const changeFavorite = createAsyncThunk<
  ChangeResponse,
  ChangeProps,
  { extra: AxiosInstance }
>('favorite/change', async ({ offerId, status }, { extra: api }) => {
  const response = await api.post<TOfferItem>(
    `${EndPoint.Favorite}/${offerId}/${status}`,
  );
  return { offer: response.data, status };
});

export { changeFavorite, fetchFavorites };
