import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from 'services/api.ts';
import { offersSlice } from 'store/slices/offers.ts';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: createAPI() } }),
  reducer: {
    [offersSlice.name]: offersSlice.reducer,
  },
});
