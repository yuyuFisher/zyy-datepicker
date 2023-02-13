import {
  useEffect, useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import DateInputBox from './dateInputBox';
import Popup from '../Popup';
import Panel from '../Panel';

import './datePicker.css';

export default function DatePicker({ defaultValue, onChange }) {
  const [dateValue, setDateValue] = useState(defaultValue);
  const [popupVisible, setPopupVisible] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    setDateValue(defaultValue);
  }, [defaultValue]);

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
        <DateInputBox dateValue={dateValue} onClose={handleClear} />
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
  defaultValue: PropTypes.instanceOf(dayjs),
  onChange: PropTypes.func,
};
