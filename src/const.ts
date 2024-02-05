export const Setting = {
  CartCount: 5
} as const;

export const AppRoute = {
  Main: '/',
  Login : '/login',
  Favorites : '/favorites',
  Offer : '/offer/:id',
  NotFound: '*'
} as const;

export const ClassName = {
  Login: 'page--login',
  Main: 'page--main'
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;