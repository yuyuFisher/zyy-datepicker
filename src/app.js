import DatePicker from './components/DatePicker';
import formatDate from './components/utils/formatDate';

export default function App() {
  const now = new Date();
  return (
    <DatePicker
      defaultValue={now}
      onChange={(date) => formatDate(date) ?? '-'}
    />
  );
}
