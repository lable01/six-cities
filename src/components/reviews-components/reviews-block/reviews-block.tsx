import ReviewsInfo from 'components/reviews-components/reviews-info';
import ReviewsForm from 'components/reviews-components/reviews-form';
import { TReview } from 'types/review.ts';
import { memo } from 'react';
import { getSortedReviews } from 'components/reviews-components/reviews-block/functions.ts';

type TReviewsBlock = {
  reviews: TReview[];
  activeOfferId: string;
};

function ReviewsBlock({ reviews, activeOfferId }: TReviewsBlock) {
  const sortedReviews = getSortedReviews(reviews);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <ReviewsInfo key={review.id} review={review} />
        ))}
      </ul>
      <ReviewsForm activeOfferId={activeOfferId} />
    </section>
  );
}

export default memo(ReviewsBlock);
