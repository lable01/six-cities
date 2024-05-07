import { TCityName } from 'types/city-name';
import { TOfferItem } from 'types/offer-item';
import { CITIES } from '../../const';
import { offers } from 'mocks/offers';
import { SortOption } from 'components/sort/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCity: (state, action: PayloadAction<TCityName>) => {
      state.city = action.payload;
    },
    setSort: (state, action: PayloadAction<number>) => {
      state.sort = action.payload;
    },
  },
});

const offersAction = offersSlice.actions;

export { offersAction, offersSlice };
