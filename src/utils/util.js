import { constant, TOTAL } from './constants';
import { getMonthAllDays, getMonthStartAndLastDate } from './getMonthStartAndLastDate';
import formatDate from './formatDate';
import isSameDate from './isSameDate';

const skipTimes = (date, type, times) => {
  const result = new Date(date);
  switch (type) {
    case 'year':
      result.setFullYear(result.getFullYear() + times);
      break;
    case 'month':
      result.setMonth(result.getMonth() + times);
      break;
    case 'date':
      result.setDate(result.getDate() + times);
      break;
    default: break;
  }
  return result;
};

function createDays(date) {
  const list = [];
  const [firstDate, lastDate] = getMonthStartAndLastDate(date);
  const preMonthDate = skipTimes(date, 'month', -1);

  const [, preMonthLastDate] = getMonthStartAndLastDate(preMonthDate);
  const preMonthLastDay = preMonthLastDate.getDay();

  for (let i = 1; i <= preMonthLastDay + 1; i += 1) {
    const thisDate = skipTimes(firstDate, 'date', -i);

    const item = {
      itemValue: thisDate,
      text: thisDate.getDate(),
      type: constant.TYPE_PRE_MONTH,
      value: formatDate(thisDate),
      isToday: false,
    };
    list.push(item);
  }
  list.reverse();

  const nowMonthDays = getMonthAllDays(date);
  for (let i = 0; i < nowMonthDays; i += 1) {
    const thisDate = skipTimes(firstDate, 'date', +i);
    const item = {
      itemValue: thisDate,
      text: thisDate.getDate(),
      type: constant.TYPE_NOW_MONTH,
      value: formatDate(thisDate),
      isToday: isSameDate(thisDate, new Date()),
    };
    list.push(item);
  }

  let i = 1;
  while (list.length < TOTAL) {
    const thisDate = skipTimes(lastDate, 'date', i += 1);
    const item = {
      itemValue: thisDate,
      text: thisDate.getDate(),
      type: constant.TYPE_NEXT_MONTH,
      value: formatDate(thisDate),
      isToday: false,
    };
    list.push(item);
  }
  return list;
}

export {
  skipTimes,
  createDays,
};
