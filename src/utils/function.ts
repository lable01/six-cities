import dayjs from 'dayjs';

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

export { getCurrentDate, getStarsWidth, randomBoolean };
