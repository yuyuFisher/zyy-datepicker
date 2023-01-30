export default function uuid(prefix) {
  return prefix + Math.random().toString(16).slice(2);
}
