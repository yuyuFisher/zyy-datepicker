import DatePicker from './components/datePicker';
import formatDate from './utils/util';

export default function App() {
  const now = new Date();
  return (
    <DatePicker
      defaultValue={now}
      onChange={(date) => formatDate(date) ?? '-'}
    />
  );
}
