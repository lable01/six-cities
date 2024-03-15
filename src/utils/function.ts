import dayjs from 'dayjs';

function getCurrentDate(date: Date, isDay: boolean) {
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

export { getCurrentDate, getStarsWidth };
