import { ReviewState } from 'types/review-state.ts';
import { ReviewLength } from './const.ts';

export function getValidReview(review: ReviewState) {
  return (
    review.comment.length < ReviewLength.min ||
    review.comment.length > ReviewLength.max ||
    review.rating === 0
  );
}
