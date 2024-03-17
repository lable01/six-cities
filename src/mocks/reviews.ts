import { TReview } from 'types/review.ts';
import { faker } from '@faker-js/faker/locale/en_GB';
import { getOffersId, randomBoolean } from '../utils/function.ts';
import { Offers } from './offers.ts';

const getReview = () => {
  const Review: TReview = {
    id: getOffersId(Offers)[faker.number.int(3)],
    date: faker.date.past({ refDate: '2024-01-01T00:00:00.000Z' }),
    user: {
      name: faker.person.firstName(),
      avatarUrl: faker.image.avatar(),
      isPro: randomBoolean(),
    },
    comment: faker.lorem.paragraph({ min: 3, max: 4 }),
    rating: faker.number.int(5),
  };
  return Review;
};

export const Reviews = Array.from(new Array(15), () => getReview());
