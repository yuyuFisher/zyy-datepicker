const TOTAL = 7 * 6;
const constant = {
  TYPE_PRE_MONTH: 0,
  TYPE_NOW_MONTH: 1,
  TYPE_NEXT_MONTH: 2,
};

function padding(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}

function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${padding(date.getMonth() + 1, 2)}-${padding(date.getDate(), 2)}`;
}

const uuid = (prefix) => prefix + Math.random().toString(16).slice(2);

function getDomParents(doms) {
  const arr = [doms];
  function loop(dom) {
    if (dom.parentNode) {
      arr.push(dom.parentNode);
    } else {
      return;
    }
    loop(dom.parentNode);
  }

  loop(doms);
  return arr;
}

const skipYears = (date, years) => {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
};

const skipMonths = (date, months) => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
};

const skipDates = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

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

const isSameDate = (date1, date2) => {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear()
      && date1.getMonth() === date2.getMonth()
      && date1.getDate() === date2.getDate()
  );
};

export {
  formatDate,
  uuid,
  getDomParents,
  skipYears,
  skipMonths,
  constant,
  isSameDate,
};
