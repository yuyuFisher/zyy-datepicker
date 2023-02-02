function padding(num, length) { // 考虑使用 `String.prototype.padStart`
  return (Array(length).join('0') + num).slice(-length);
}

export default function formatDate(date) {
  // 如果要写这种防御式风格，只判断为空并没有什么意义，可以考虑使用 `date instanceof Date`
  // 还有多处类似风格。
  if (!date) {
    return '';
  }
  return `${date.getFullYear()}-${padding(date.getMonth() + 1, 2)}-${padding(date.getDate(), 2)}`;
}
