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
  FavoritesEmpty: 'page--favorites-empty',
  Offer: '',
} as const;

export const ClassNamePages = {
  Main: 'place-card',
  Offer: 'offer',
  FavoritesEmpty: 'page__main--favorites-empty',
  Reviews: 'reviews',
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
  Nearby: '/nearby',
} as const;

export const FavoriteStatus = {
  Added: 1,
  Removed: 0,
} as const;

export const enum FavoriteStatusCode {
  AddedOk = 200,
  RemovedOk = 201,
}

export const enum ServicePageType {
  NotFound = 'Unfortunately, you ended up on a non-existing page',
  Error = 'Unfortunately, there are problems with the server, please try again later',
}

export const ErrorToast = {
  ReviewFormError:
    'sending reviews is possible only to authorized users, please log in',
  CheckAuthError: 'failed to verify authorization, please try again',
  Login: 'Failed to login, please try again',
  Logout: 'failed to delog, please try again',
  FetchComments: 'server error loading reviews, please try again',
  PostComments: 'server error send review, please try again',
  FetchFavorites: 'server error loading favorites offers, please try again',
  ChangeFavorite: 'server error change favorites offers, please try again',
  FetchAllOffers: 'server error loading offers, please try again',
  FetchOffer: 'server error loading offer, please try again',
  FetchNearOffers: 'server error loading nearby offers, please try again',
} as const;

export const NumberCitiesNearby = {
  Min: 0,
  Max: 3,
} as const;
