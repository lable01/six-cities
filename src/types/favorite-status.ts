import { FavoriteStatus } from '../const/const.ts';

export type TFavoriteStatus =
  (typeof FavoriteStatus)[keyof typeof FavoriteStatus];
