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
        value={date}
        onChange={setDate}
      />
      {/* <PopupDemo /> */}
    </>

  );
}
