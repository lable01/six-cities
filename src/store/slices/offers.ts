import { TCityName } from 'types/city-name';
import { CITIES, RequestStatus } from '../../const';
import { SortOption } from 'components/sort/const';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllOffers } from 'store/thunks/offers.ts';
import { TOffersState } from 'types/offer-state.ts';

const initialState: TOffersState = {
  city: CITIES[0],
  offers: [],
  sort: SortOption.Popular,
  status: RequestStatus.Idle,
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
  selectors: {
    city: (state) => state.city,
    offers: (state) => state.offers,
    sort: (state) => state.sort,
    status: (state) => state.status,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllOffers.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchAllOffers.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchAllOffers.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
});

const offersAction = offersSlice.actions;
const offersSelectors = offersSlice.selectors;

export { offersAction, offersSelectors, offersSlice };
