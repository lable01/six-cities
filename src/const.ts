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
  Offer: '',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const CitiesNames = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
} as const;

export const ReviewLength = {
  min: 50,
  max: 300,
};

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_ACTIVE = './img/pin-active.svg';

export const TILE_LAYER_URL_PATTERN =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const TILE_LAYER_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
