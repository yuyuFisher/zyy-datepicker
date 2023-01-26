export function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

export default { formatDate };
