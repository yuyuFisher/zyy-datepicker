import DatePicker from './components/DatePicker';
import formatDate from './components/utils/formatDate';

export default function App() {
  const now = new Date();
  return (
    <DatePicker
      defaultValue={{
        year: now.getFullYear(),
        month: now.getMonth(),
        date: now.getDate(),
      }}
      onChange={(date) => formatDate(date) ?? '-'}
    />
  );
}
