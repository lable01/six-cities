import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'services/api.ts';
import { offersSlice } from 'store/slices/offers.ts';

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: createAPI() } }),
  reducer,
});
