function padding(number) {
  return String(number).padStart(2, '0');
}

export default function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${padding(date.getMonth() + 1)}-${padding(date.getDate())}`;
}
