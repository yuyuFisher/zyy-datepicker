function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysOfMonth(date, month, day) {
  const isLeap = isLeapYear(date.getFullYear());
  let days = day;
  switch (month) {
    case 4: case 6: case 9: case 11:
      if (day > 30) days = 30;
      break;
    case 2:
      if (isLeap) {
        if (day > 29) days = 29;
      } else if (day > 28) days = 28;
      break;
    default:
      if (day > 31) days = 31;
      break;
  }
  return days;
}

function handleMonthBoundary(result, date, times) {
  let month = result.getMonth() + times;
  if (month < 0) month += 12;
  month += 1;
  const day = result.getDate();
  return daysOfMonth(date, month, day);
}

export default function skipTimes(date, type, times) {
  const result = new Date(date);
  switch (type) {
    case 'year':
      result.setFullYear(result.getFullYear() + times);
      break;
    case 'month':
      result.setDate(handleMonthBoundary(result, date, times));
      result.setMonth(result.getMonth() + times);
      break;
    case 'date':
      result.setDate(result.getDate() + times);
      break;
    default:
      break;
  }
  return result;
}
