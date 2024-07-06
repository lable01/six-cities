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
  const width = (100 / 5) * Math.round(stars);

  return `${width}%`;
}

function getSortedOffers(offers: TOfferItem[], currentSort: SortOption) {
  let sortedOffers = offers;

  switch (currentSort) {
    case SortOption.PriceLowToHigh:
      sortedOffers = [...offers].sort((a, b) => a.price - b.price);
      break;
    case SortOption.PriceHighToLow:
      sortedOffers = [...offers].sort((a, b) => b.price - a.price);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers = [...offers].sort((a, b) => b.rating - a.rating);
      break;
    default:
      break;
  }

  return sortedOffers;
}

function groupOffersByCity(offers: TOfferItem[]) {
  return offers.reduce<{
    [key: string]: TOfferItem[];
  }>((result, offer) => {
    if (offer.isFavorite) {
      const city = offer.city.name;
      if (!result[city]) {
        result[city] = [];
      }

      const cityOffers = result[city];
      cityOffers.push(offer);
    }
    return result;
  }, {});
}

function capitalizeFirstLetter(string: string) {
  if (!string) return ''; // Проверка на пустую строку или undefined/null
  return string.charAt(0).toUpperCase() + string.slice(1);
}

type FormValidate = {
  email: string;
  password: string;
};

function validateloginForm(formData: FormValidate) {
  const errors: FormValidate = {
    email: '',
    password: '',
  };

  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  } else if (
    !/[A-Za-z]/.test(formData.password) ||
    !/\d/.test(formData.password)
  ) {
    errors.password =
      'Password must contain at least one letter and one number';
  }

  return errors;
}

export {
  getCurrentDate,
  getStarsWidth,
  getSortedOffers,
  groupOffersByCity,
  capitalizeFirstLetter,
  validateloginForm,
};
