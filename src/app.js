/* import formatDate from './components/utils/formatDate'; */
import PopupDemo from './components/Demo/Popup';
/* import DatePicker from './components/DatePicker'; */

export default function App() {
  /* const now = new Date(); */
  return (
    <>
      {/* <DatePicker
        defaultValue={{
          year: now.getFullYear(),
          month: now.getMonth(),
          date: now.getDate(),
        }}
        onChange={(date) => formatDate(date) ?? '-'}
      /> */}
      <PopupDemo />
    </>

  );
}
