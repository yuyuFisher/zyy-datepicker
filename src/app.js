// import PopupDemo from './components/Demo/Popup';
import dayjs from 'dayjs';
import { useState } from 'react';
import DatePicker from './DatePicker';

export default function App() {
  const now = dayjs();
  const [date, setDate] = useState(now);
  return (
    <>
      <DatePicker
        defaultValue={date}
        onChange={(value) => setDate(value)}
      />
      {/* <PopupDemo /> */}
    </>

  );
}
