import ReviewsInfo from 'components/reviews-info';
import ReviewsForm from 'components/reviews-form';
import { TReview } from 'types/review.ts';

type TReviewsBlock = {
  review: TReview[];
};

function ReviewsBlock({ review }: TReviewsBlock) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{review.length}</span>
      </h2>
      <ul className="reviews__list">
        {review.map((item) => (
          <ReviewsInfo key={item.comment} review={item} />
        ))}
      </ul>
      <ReviewsForm />
    </section>
  );
}

export default ReviewsBlock;
