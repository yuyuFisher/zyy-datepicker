import formatDate from './DatePickerComponents/utils/formatDate';
// import PopupDemo from './components/Demo/Popup';
import dayjs from 'dayjs';
import { useState } from 'react';
import DatePicker from './DatePickerComponents/DatePicker';

export default function App() {
  const now = dayjs();
  const [date, setDate] = useState(now);
  return (
    <>
      <DatePicker
        defaultValue={now}
        onChange={(date) => formatDate(date) ?? '-'}
      />
      {/* <PopupDemo /> */}
    </>

  );
}
