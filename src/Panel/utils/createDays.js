import dayjs from 'dayjs';
import monthCodeMap from './monthCodeMap';
import isSameDate from './isSameDate';

export default function createDays(generateDate) {
  const date = dayjs(generateDate);
  const list = [];

  const firstDate = date.startOf('month');

  const preMonthDate = date.subtract(1, 'month');
  const preMonthLastDay = preMonthDate.endOf('month').day();

  if (preMonthLastDay !== 6) {
    for (let i = 1; i <= preMonthLastDay + 1; i += 1) {
      list.push(i);
    }
  }

  const nowMonthDays = date.daysInMonth();
  for (let i = 0; i < nowMonthDays; i += 1) {
    const thisDate = firstDate.add(i, 'day').startOf('day');
    const item = {
      itemValue: thisDate,
      text: thisDate.date(),
      type: monthCodeMap.TYPE_CURRENT_MONTH,
      dateValue: thisDate.format('YYYY-MM-DD'),
      isToday: isSameDate(thisDate, dayjs()),
    };
    list.push(item);
  }

  return list;
}
