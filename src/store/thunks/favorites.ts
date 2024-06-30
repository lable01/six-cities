import { createAsyncThunk } from '@reduxjs/toolkit';
import { TOfferItem } from 'types/offer-item.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, FavoriteStatusCode } from '../../const.ts';
import { TFavoriteStatus } from 'types/favorite-status.ts';
import { offersAction } from 'store/slices/offers.ts';
import { toast } from 'react-toastify';

type ChangeProps = {
  offerId: string;
  status: TFavoriteStatus;
};

type ChangeResponse = {
  offer: TOfferItem;
  status: TFavoriteStatus;
};

const fetchFavorites = createAsyncThunk<
  TOfferItem[],
  undefined,
  { extra: AxiosInstance }
>('favorite/fetchAll', async (_arg, { extra: api }) => {
  try {
    const response = await api.get<TOfferItem[]>(EndPoint.Favorite);

    return response.data;
  } catch (error) {
    toast.error('server error loading favorites offers, please try again');
    throw error;
  }
});

const changeFavorite = createAsyncThunk<
  ChangeResponse,
  ChangeProps,
  { extra: AxiosInstance }
>('favorite/change', async ({ offerId, status }, { extra: api, dispatch }) => {
  try {
    const response = await api.post<TOfferItem>(
      `${EndPoint.Favorite}/${offerId}/${status}`,
    );

    if (
      [FavoriteStatusCode.AddedOk, FavoriteStatusCode.RemovedOk].includes(
        response.status,
      )
    ) {
      dispatch(offersAction.updateOffer(response.data));
    }

    return { offer: response.data, status };
  } catch (error) {
    toast.error('server error change favorites offers, please try again');
    throw error;
  }
});

export { changeFavorite, fetchFavorites };
