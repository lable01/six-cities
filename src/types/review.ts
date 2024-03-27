import { TUser } from 'types/user.ts';

export type TReview = {
  id: string;
  date: Date;
  user: TUser;
  comment: string;
  rating: number;
};
