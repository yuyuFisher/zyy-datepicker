import {
  useEffect, useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import formatDate from './utils/formatDate';
import DateInputBox from './dateInputBox';
import Popup from '../Popup';
import Panel from '../Panel';

import './datePicker.css';

export default function DatePicker({ value, onChange }) {
  const [dateValue, setDateValue] = useState(value);
  const [popupVisible, setPopupVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    setDateValue(value);
  }, [value]);

  const handleClear = (e) => {
    setDateValue(null);
    setPopupVisible(false);
    e.stopPropagation();
  };

  const handleDatepickerClick = () => {
    setPopupVisible(true);
  };

  const onPanelChange = (date) => {
    onChange(date);
    setDateValue(date);
    setPopupVisible(false);
  };

  return (
    <section>
      <section className="head" ref={rootRef} onClick={handleDatepickerClick}>
        <DateInputBox value={formatDate(dateValue)} onClear={handleClear} />
      </section>
      <Popup
        visible={popupVisible}
        targetRef={rootRef}
        onVisibilityChange={(visible) => setPopupVisible(visible)}
      >
        <Panel dateValue={dateValue} onChange={onPanelChange} />
      </Popup>
    </section>
  );
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(dayjs),
  onChange: PropTypes.func,
};
