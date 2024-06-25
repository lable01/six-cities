import { TOfferItem } from 'types/offer-item.ts';
import { FavoriteStatus, RequestStatus } from '../../const.ts';
import { createSlice } from '@reduxjs/toolkit';
import { changeFavorite, fetchFavorites } from 'store/thunks/favorites.ts';

type FavoritesState = {
  items: TOfferItem[];
  status: RequestStatus;
};

const initialState: FavoritesState = {
  items: [],
  status: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  initialState,
  name: 'favorites',
  reducers: {},
  selectors: {
    favoriteStatus: (state) => state.status,
    favorites: (state) => state.items,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.items.push(action.payload.offer);
            state.status = RequestStatus.Success;
            break;
          case FavoriteStatus.Removed:
            state.items = state.items.filter(
              ({ id }) => id !== action.payload.offer.id,
            );
            state.status = RequestStatus.Success;
        }
      })
      .addCase(changeFavorite.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(changeFavorite.pending, (state) => {
        state.status = RequestStatus.Loading;
      }),
});

const favoritesActions = {
  ...favoritesSlice.actions,
  changeFavorite,
  fetchFavorites,
};
const favoritesSelectors = favoritesSlice.selectors;

export { favoritesSlice, favoritesActions, favoritesSelectors };
