import DatePicker from './components/DatePicker/datePicker';
import { formatDateAtInput } from './utils/formatDate';

export default function App() {
  const now = new Date();
  return (
    <DatePicker
      defaultValue={now}
      onChange={(date) => formatDateAtInput(date) ?? '-'}
    />
  );
}
