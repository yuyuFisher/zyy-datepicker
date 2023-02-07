import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import formatDate from '../utils/formatDate';
import DateInputBox from './dateInputBox';
import Popup from '../Popup';
import Panel from '../Panel';

import './datePicker.css';

export default function DatePicker(props) {
  const { defaultValue, onChange } = props;
  const [dateValue, setDateValue] = useState(
    new Date(defaultValue.year, defaultValue.month, defaultValue.date),
  );
  const [popupVisible, setPopupVisible] = useState(false);
  const rootRef = useRef(null);
  const dateString = useMemo(
    () => (dateValue ? formatDate(dateValue) : ''),
    [dateValue],
  );

  useEffect(() => {
    onChange?.(dateValue);
  }, [dateValue]);

  const handleClear = (e) => {
    setDateValue(null);
    setPopupVisible(false);
    e.stopPropagation();
  };

  const handleDatepickerClick = () => {
    setPopupVisible(true);
  };

  const onPanelChange = (date) => {
    setDateValue(date);
    setTimeout(() => { // 选完弹框立刻消失
      setPopupVisible(false);
    }, 0);
  };

  return (
    <section>
      <section className="head" ref={rootRef} onClick={handleDatepickerClick}>
        <DateInputBox dateValue={dateString} onClose={handleClear} />
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
  defaultValue: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    date: PropTypes.number,
  }),
  onChange: PropTypes.func,
};
