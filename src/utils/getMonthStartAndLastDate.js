function getMonthAllDays(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return new Date(year, month, 0).getDate();
}

function getMonthStartAndLastDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDate = new Date(year, month, 1);
  const lastDate = new Date(year, month, getMonthAllDays(date));
  return [firstDate, lastDate];
}

export { getMonthAllDays, getMonthStartAndLastDate };
