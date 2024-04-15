import { offers } from 'mocks/offers.ts';
import { CITIES } from '../const';
import { TOfferItem } from 'types/offer-item';
import { TCityName } from 'types/city-name';
import { createAction, createReducer } from '@reduxjs/toolkit';

type TOffersState = {
  city: TCityName;
  offers: TOfferItem[];
};

const initialState: TOffersState = {
  city: CITIES[0],
  offers,
};

const setCity = createAction<TCityName>('offers/setCity');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  });
});

export { reducer, setCity };
