import { TReview } from 'types/review.ts';

export function getSortedReviews(reviews: TReview[]) {
  return [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);
}
