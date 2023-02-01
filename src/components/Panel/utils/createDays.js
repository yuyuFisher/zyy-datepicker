import { getMonthAllDays, getMonthStartAndLastDate } from './getMonthStartAndLastDate';
import { constant } from './constants';
import isSameDate from './isSameDate';
import skipTimes from './skipTimes';
import formatDate from '../../utils/formatDate';

export default function createDays(date) {
  const list = [];
  const [firstDate] = getMonthStartAndLastDate(date);
  const preMonthDate = skipTimes(date, 'month', -1);

  const [, preMonthLastDate] = getMonthStartAndLastDate(preMonthDate);
  const preMonthLastDay = preMonthLastDate.getDay();

  if (preMonthLastDay !== 6) {
    for (let i = 1; i <= preMonthLastDay + 1; i += 1) {
      const thisDate = skipTimes(firstDate, 'date', -i);
      const item = {
        itemValue: thisDate,
        text: null,
        type: constant.TYPE_PRE_MONTH,
        dateValue: formatDate(thisDate),
        isToday: false,
      };
      list.push(item);
    }
    list.reverse();
  }

  const nowMonthDays = getMonthAllDays(date);
  for (let i = 0; i < nowMonthDays; i += 1) {
    const thisDate = skipTimes(firstDate, 'date', +i);
    const item = {
      itemValue: thisDate,
      text: thisDate.getDate(),
      type: constant.TYPE_NOW_MONTH,
      dateValue: formatDate(thisDate),
      isToday: isSameDate(thisDate, new Date()),
    };
    list.push(item);
  }

  return list;
}
