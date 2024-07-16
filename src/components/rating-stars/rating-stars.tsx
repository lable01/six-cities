import { getStarsWidth } from 'utils/function.ts';
import { ClassNamePages } from 'const/const.ts';
import clsx from 'clsx';
import { memo, useMemo } from 'react';

type RatingStarsProps = {
  type: (typeof ClassNamePages)[keyof typeof ClassNamePages];
  rating: number;
};

function RatingStars({ type, rating }: RatingStarsProps) {
  const starWidth = useMemo(() => getStarsWidth(rating), [rating]);

  return (
    <div className={clsx(`${type}__stars`, 'rating__stars')}>
      <span style={{ width: `${starWidth}` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default memo(RatingStars);
