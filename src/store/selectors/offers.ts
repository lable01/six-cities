import { RootState } from 'types/store';

const selectOffers = (state: RootState) => state.offers.offers;
const selectCity = (state: RootState) => state.offers.city;

const selectSort = (state: RootState) => state.offers.sort;

export { selectOffers, selectCity, selectSort };
