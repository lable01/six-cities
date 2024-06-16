export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  NotFound: '*',
} as const;

export const ClassName = {
  Login: 'page--gray page--login',
  Main: 'page--gray page--main',
  MainEmpty: 'page__main page__main--index page__main--index-empty',
  Favorites: '',
  FavoritesEmpty: 'page page--favorites-empty',
  Offer: '',
} as const;

export const ClassNamePages = {
  Main: 'place-card',
  Offer: 'offer',
  FavoritesEmpty: 'page__main--favorites-empty',
} as const;

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CitiesNames = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const CITIES = [
  CitiesNames.Paris,
  CitiesNames.Cologne,
  CitiesNames.Brussels,
  CitiesNames.Amsterdam,
  CitiesNames.Hamburg,
  CitiesNames.Dusseldorf,
];

export const QUANTITY_NEAR_OFFERS = 3;
export const ReviewLength = {
  min: 50,
  max: 300,
};

export const SizesCards = {
  cities: {
    width: 260,
    height: 200,
  },
  'near-places': {
    width: 260,
    height: 200,
  },
  favorites: {
    width: 150,
    height: 110,
  },
} as const;

export const SizesLogo = {
  header: {
    width: 81,
    height: 41,
  },
  footer: {
    width: 64,
    height: 33,
  },
} as const;

export const SizesBookmark = {
  offerDetail: {
    width: 31,
    height: 33,
  },
  offers: {
    width: 18,
    height: 19,
  },
} as const;

export const Default = {
  BaseURL: 'https://15.design.htmlacademy.pro/six-cities',
  Timeout: 5000,
} as const;

export const enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed,
}

export const EndPoint = {
  Comments: '/comments',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
} as const;
