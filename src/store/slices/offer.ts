import { TOfferDetail } from 'types/offer-detail.ts';
import { TOfferItem } from 'types/offer-item.ts';
import { RequestStatus } from '../../const.ts';
import { createSlice } from '@reduxjs/toolkit';
import { fetchNearOffers, fetchOffer } from 'store/thunks/offers.ts';

type TOfferState = {
  info: TOfferDetail | null;
  nearby: TOfferItem[];
  status: RequestStatus;
};

const initialState: TOfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
};

const offerSlice = createSlice({
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
    },
  },
  selectors: {
    nearByOffers: (state: TOfferState) => state.nearby,
    offer: (state: TOfferState) => state.info,
    offerStatus: (state: TOfferState) => state.status,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearOffers.fulfilled, (state, action) => {
        state.nearby = action.payload;
      }),
});

const offerAction = { ...offerSlice.actions, fetchNearOffers, fetchOffer };
const offerSelectors = offerSlice.selectors;

export { offerAction, offerSelectors, offerSlice };
