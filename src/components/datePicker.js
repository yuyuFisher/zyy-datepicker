import '../styles/icon.css';
import '../styles/datePicker.css';
import { useState } from 'react';

export default function DatePicker() {
  const defaultDate = new Date();
  const year = defaultDate.getFullYear();
  const month = defaultDate.getMonth() + 1;
  const date = defaultDate.getDate();
  const DateRender = `${year}-${month}-${date}`;
  const [isClose, setIsClose] = useState(false);
  const placeholder = '选择日期';
  const [dateString, setDateString] = useState(DateRender);

  function handleOver() {
    setIsClose(true);
  }

  function handleLeave() {
    setIsClose(false);
  }

  function handleClear() {
    setDateString('');
  }

  return (
    <div className="head-calendar">
      <input
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        className="dt-input"
        disabled
        value={dateString}
      />
      <svg
        className="icon"
        aria-hidden="true"
        onMouseOver={handleOver}
        onMouseLeave={handleLeave}
        onClick={handleClear}
      >
        <use xlinkHref={isClose ? '#icon-close' : '#icon-calendar'} />
      </svg>
    </div>
  );
}
