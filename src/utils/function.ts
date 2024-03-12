import dayjs from 'dayjs';

function getCurrentDate(date: Date, isDay: boolean) {
  if (isDay) {
    return dayjs(date).format('YYYY-MM-DD');
  }
  return dayjs(date).format('MMMM YYYY');
}

export { getCurrentDate };
