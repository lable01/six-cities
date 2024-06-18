import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'services/api.ts';
import { offersSlice } from 'store/slices/offers.ts';
import { offerSlice } from 'store/slices/offer.ts';
import { reviewSlice } from 'store/slices/reviews.ts';
import { userSlice } from 'store/slices/user.ts';
import { favoritesSlice } from 'store/slices/favorites.ts';

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [reviewSlice.name]: reviewSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: createAPI() } }),
  reducer,
});
