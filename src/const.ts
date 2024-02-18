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
