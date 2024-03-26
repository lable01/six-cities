import { TUserType } from 'types/user-type.ts';

export type TReviewType = {
  id: string;
  date: Date;
  user: TUserType;
  comment: string;
  rating: number;
};
