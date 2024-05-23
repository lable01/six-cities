import { createAsyncThunk } from '@reduxjs/toolkit';
import { TReview } from 'types/review.ts';
import { TOfferDetail } from 'types/offer-detail.ts';
import { AxiosInstance } from 'axios';
import { EndPoint } from '../../const.ts';

const fetchComments = createAsyncThunk<
  TReview[],
  TOfferDetail['id'],
  { extra: AxiosInstance }
>('comments/fetch', async (offerId, { extra: api }) => {
  const response = await api.get<TReview[]>(`${EndPoint.Comments}/${offerId}`);
  return response.data;
});

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: TOfferDetail['id'];
};

const postComment = createAsyncThunk<
  TReview,
  PostCommentProps,
  { extra: AxiosInstance }
>('comments/post', async ({ body, offerId }, { extra: api }) => {
  const response = await api.post<TReview>(
    `${EndPoint.Comments}/${offerId}`,
    body,
  );
  return response.data;
});

export { fetchComments, postComment };
