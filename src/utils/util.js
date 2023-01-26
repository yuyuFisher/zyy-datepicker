export function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export default { formatDate };
