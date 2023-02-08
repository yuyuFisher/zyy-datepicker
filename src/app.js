import formatDate from './DatePickerComponents/utils/formatDate';
// import PopupDemo from './components/Demo/Popup';
import DatePicker from './DatePickerComponents/DatePicker';

export default function App() {
  const now = new Date();
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
