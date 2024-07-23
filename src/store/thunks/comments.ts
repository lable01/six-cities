import { createAsyncThunk } from '@reduxjs/toolkit';
import { TReview } from 'types/review.ts';
import { TOfferDetail } from 'types/offer-detail.ts';
import { AxiosInstance } from 'axios';
import { EndPoint, ErrorToast } from 'const/const.ts';
import { toast } from 'react-toastify';

type PostCommentProps = {
  body: {
    comment: string;
    rating: number;
  };
  offerId: TOfferDetail['id'];
};

const fetchComments = createAsyncThunk<
  TReview[],
  TOfferDetail['id'],
  { extra: AxiosInstance }
>('comments/fetch', async (offerId, { extra: api }) => {
  try {
    const response = await api.get<TReview[]>(
      `${EndPoint.Comments}/${offerId}`,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.FetchComments);
    throw error;
  }
});

const postComment = createAsyncThunk<
  TReview,
  PostCommentProps,
  { extra: AxiosInstance }
>('comments/post', async ({ body, offerId }, { extra: api }) => {
  try {
    const response = await api.post<TReview>(
      `${EndPoint.Comments}/${offerId}`,
      body,
    );

    return response.data;
  } catch (error) {
    toast.error(ErrorToast.PostComments);
    throw error;
  }
});

export { fetchComments, postComment };
