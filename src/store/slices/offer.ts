import { TOfferDetail } from 'types/offer-detail.ts';
import { TOfferItem } from 'types/offer-item.ts';
import { RequestStatus } from '../../const.ts';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchNearOffers, fetchOffer } from 'store/thunks/offers.ts';
import { RootState } from 'types/store.ts';

type TOfferState = {
  info: TOfferDetail | null;
  nearby: TOfferItem[];
  status: RequestStatus;
  nearByStatus: RequestStatus;
};

const initialState: TOfferState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
  nearByStatus: RequestStatus.Idle,
};

const offerSlice = createSlice({
  initialState,
  name: 'offer',
  reducers: {},
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
      .addCase(fetchNearOffers.rejected, (state) => {
        state.nearByStatus = RequestStatus.Failed;
      })
      .addCase(fetchNearOffers.pending, (state) => {
        state.nearByStatus = RequestStatus.Loading;
      })
      .addCase(fetchNearOffers.fulfilled, (state, action) => {
        state.nearby = action.payload;
        state.nearByStatus = RequestStatus.Success;
      }),
});

const offerAction = { ...offerSlice.actions, fetchNearOffers, fetchOffer };
const selectOfferStatus = (state: RootState) => state.offer.status;
const selectNearByStatus = (state: RootState) => state.offer.nearByStatus;

const selectOfferStatuses = createSelector([selectOfferStatus], (status) => ({
  isLoading: [RequestStatus.Idle, RequestStatus.Loading].includes(status),
}));
const selectNearByStatuses = createSelector([selectNearByStatus], (status) => ({
  isLoading: [RequestStatus.Idle, RequestStatus.Loading].includes(status),
}));
const offerSelectors = offerSlice.selectors;

export {
  offerAction,
  offerSelectors,
  offerSlice,
  selectOfferStatuses,
  selectNearByStatuses,
};
