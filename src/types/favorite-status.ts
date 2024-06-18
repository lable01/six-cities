import { FavoriteStatus } from '../const.ts';

export type TFavoriteStatus =
  (typeof FavoriteStatus)[keyof typeof FavoriteStatus];
