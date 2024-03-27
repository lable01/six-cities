import ReviewsInfo from 'components/reviews-info';
import ReviewsForm from 'components/reviews-form';
import { TReview } from 'types/review.ts';

type TReviewsBlock = {
  reviews: TReview[];
};

function ReviewsBlock({ reviews }: TReviewsBlock) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsInfo key={review.id} review={review} />
        ))}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default ReviewsBlock;
