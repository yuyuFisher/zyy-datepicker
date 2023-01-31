export default function skipTimes(date, type, times) {
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
    default:
      break;
  }
  return result;
}
