import { Offers } from 'mocks/offers.ts';
import { CITIES } from '../const';
import { TOfferItem } from 'types/offer-item';
import { TCityName } from 'types/city-name';

type TOffersState = {
  city: TCityName;
  offers: TOfferItem[];
};

const initialState: TOffersState = {
  city: CITIES[0],
  offers: Offers,
};

const enum ActionType {
  SetCity = 'offers/setCity',
}

const setCity = (city: TCityName) => ({
  payload: city,
  type: ActionType.SetCity,
});

function reducer(
  state: TOffersState = initialState,
  action: { payload: unknown; type: ActionType },
): TOffersState {
  switch (action.type) {
    case ActionType.SetCity:
      return {
        ...state,
        city: action.payload as TCityName,
      };
    default:
      return state;
  }
}

export { reducer, setCity };
