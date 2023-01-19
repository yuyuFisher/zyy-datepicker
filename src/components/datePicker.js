import '../styles/icon.css';
import Icons from '../utils/icons';

export default function DatePicker() {
  const defaultDate = new Date();
  const year = defaultDate.getFullYear();
  const month = defaultDate.getMonth() + 1;
  const date = defaultDate.getDate();
  const DateRender = `${year}-${month}-${date}`;
  return (
    <header>
      <input value={DateRender} />
      <Icons iconName="#icon-calendar" />
    </header>
  );
}
