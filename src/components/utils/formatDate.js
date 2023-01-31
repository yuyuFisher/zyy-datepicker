function padding(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}

export default function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${padding(date.getMonth() + 1, 2)}-${padding(date.getDate(), 2)}`;
}
