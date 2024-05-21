import { RequestStatus } from '../../const.ts';
import { TReview } from 'types/review.ts';
import { createSlice } from '@reduxjs/toolkit';
import { commentsThunks } from 'store/thunks/comments.ts';

type ReviewState = {
  items: TReview[];
  status: RequestStatus;
};

const initialState: ReviewState = {
  items: [],
  status: RequestStatus.Idle,
};

const reviewSlice = createSlice({
  initialState,
  name: 'reviews',
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(commentsThunks.fetchComments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(commentsThunks.fetchComments.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(commentsThunks.fetchComments.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(commentsThunks.postComment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(commentsThunks.postComment.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(commentsThunks.postComment.pending, (state) => {
        state.status = RequestStatus.Loading;
      }),
});

export const reviewsActions = reviewSlice.actions;
