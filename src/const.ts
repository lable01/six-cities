export const Setting = {
  CartCount: 5,
} as const;

export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
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
