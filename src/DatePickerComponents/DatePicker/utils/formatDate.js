function padding(number) {
  return String(number).padStart(2, '0');
}

export default function formatDate(date) {
  if (!date) {
    return '';
  }
  return `${date.year()}-${padding(date.month() + 1)}-${padding(date.date())}`;
}
