import { getStarsWidth } from '../../utils/function.ts';
import { ClassNamePages } from '../../const.ts';
import clsx from 'clsx';

type RatingStarsProps = {
  type: (typeof ClassNamePages)[keyof typeof ClassNamePages];
  rating: number;
};

function RatingStars({ type, rating }: RatingStarsProps) {
  const starWidth = getStarsWidth(rating);

  return (
    <div className={clsx(`${type}__stars`, 'rating__stars')}>
      <span style={{ width: `${starWidth}` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default RatingStars;
