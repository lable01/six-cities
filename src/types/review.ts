import { TUser } from 'types/user-type.ts';

export type TReview = {
  id: string;
  date: Date;
  user: TUser;
  comment: string;
  rating: number;
};
