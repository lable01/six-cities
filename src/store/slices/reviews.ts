import { RequestStatus } from '../../const.ts';
import { TReview } from 'types/review.ts';
import { createSlice } from '@reduxjs/toolkit';
import { fetchComments, postComment } from 'store/thunks/comments.ts';

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
  selectors: {
    reviews: (state: ReviewState) => state.items,
    reviewsStatus: (state: ReviewState) => state.status,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchComments.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(postComment.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(postComment.pending, (state) => {
        state.status = RequestStatus.Loading;
      }),
});

const reviewsActions = { ...reviewSlice.actions, fetchComments };

const reviewsSelectors = reviewSlice.selectors;

export { reviewSlice, reviewsActions, reviewsSelectors };
