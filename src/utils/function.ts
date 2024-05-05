import dayjs from 'dayjs';
import { SortOption } from 'components/sort/const.ts';
import { TOfferItem } from 'types/offer-item.ts';

function getCurrentDate(date: Date, isDay = true) {
  if (isDay) {
    return dayjs(date).format('YYYY-MM-DD');
  }

  return dayjs(date).format('MMMM YYYY');
}

function getStarsWidth(stars: number) {
  if (stars === 0) {
    return `${stars}%`;
  }
  const width = (100 / 5) * stars;

  return `${width}%`;
}

function randomBoolean() {
  return Math.random() >= 0.5;
}

function getSortedOffers(offers: TOfferItem[], currentSort: SortOption) {
  let sortedOffers = offers;

  if (currentSort === SortOption.PriceLowToHigh) {
    sortedOffers = [...offers].sort((a, b) => a.price - b.price);
  }

  if (currentSort === SortOption.PriceHighToLow) {
    sortedOffers = [...offers].sort((a, b) => b.price - a.price);
  }

  if (currentSort === SortOption.TopRatedFirst) {
    sortedOffers = [...offers].sort((a, b) => b.rating - a.rating);
  }

  return sortedOffers;
}

export { getCurrentDate, getStarsWidth, randomBoolean, getSortedOffers };
