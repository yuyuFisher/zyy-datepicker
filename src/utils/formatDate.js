function padding(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}

function formatDateAtInput(date) {
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${padding(date.getMonth() + 1, 2)}-${padding(date.getDate(), 2)}`;
}

function formatDateAtPanel(date) {
  return `${date.getFullYear()} 年 ${date.getMonth() + 1} 月`;
}

export { formatDateAtInput, formatDateAtPanel };
