import { TReview } from 'types/review.ts';
import { faker } from '@faker-js/faker/locale/en_GB';

const getReview = () => {
  const Review: TReview = {
    name: faker.person.firstName(),
    userUrl: faker.image.avatar(),
    stars: faker.number.int(5),
    comment: faker.lorem.paragraph({ min: 3, max: 4 }),
    date: faker.date.past({ refDate: '2024-01-01T00:00:00.000Z' }),
  };
  return Review;
};

export const Reviews = Array.from(new Array(5), () => getReview());
