import { offers } from 'mocks/offers.ts';
import { CITIES } from '../const';
import { TOfferItem } from 'types/offer-item';
import { TCityName } from 'types/city-name';
import { createAction, createReducer } from '@reduxjs/toolkit';
import { SortOption } from 'components/sort/const.ts';

type TOffersState = {
  city: TCityName;
  offers: TOfferItem[];
  sort: number;
};

const initialState: TOffersState = {
  city: CITIES[0],
  offers,
  sort: SortOption.Popular,
};

const setCity = createAction<TCityName>('offers/setCity');

const setSort = createAction<number>('offers/setSort');

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    });
});

export { reducer, setCity, setSort };
