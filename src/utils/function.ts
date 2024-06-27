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

type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email: string;
  password: string;
};

function validateForm(
  formData: FormData,
  setErrors: (errors: FormErrors) => void,
): boolean {
  const newErrors: FormErrors = {
    email: '',
    password: '',
  };

  let isValid = true;

  if (!formData.email) {
    newErrors.email = 'Email is required';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
    isValid = false;
  }

  if (!formData.password) {
    newErrors.password = 'Password is required';
    isValid = false;
  } else if (formData.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters long';
    isValid = false;
  } else if (
    !/[A-Za-z]/.test(formData.password) ||
    !/\d/.test(formData.password)
  ) {
    newErrors.password =
      'Password must contain at least one letter and one number';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
}

export {
  getCurrentDate,
  getStarsWidth,
  getSortedOffers,
  groupOffersByCity,
  capitalizeFirstLetter,
  validateForm,
};
