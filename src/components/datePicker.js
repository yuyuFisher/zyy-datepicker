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

  function handleOver() {
    setIsClose(true);
  }

  function handleLeave() {
    setIsClose(false);
  }

  return (
    <header className="head-calendar">
      <label>{DateRender}</label>
      <svg className="icon" aria-hidden="true" onMouseOver={handleOver} onMouseLeave={handleLeave}>
        <use xlinkHref={isClose ? '#icon-close' : '#icon-calendar'} />
      </svg>
    </header>
  );
}
