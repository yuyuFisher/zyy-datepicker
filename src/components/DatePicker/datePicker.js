import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import DateInputBox from './dateInputBox';
import Popup from '../Popup';
import Panel from '../Panel';
import './datePicker.css';
import formatDate from '../utils/formatDate';

export default function DatePicker(props) {
  const {
    defaultValue = new Date(),
    onChange,
  } = props;
  const [dateValue, setDateValue] = useState(defaultValue);
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
    <section className="head" ref={rootRef} onClick={handleDatepickerClick}>
      <DateInputBox dateValue={dateString} onClose={handleClear} />
      <Popup
        visible={popupVisible}
        target={rootRef}
        onVisible={(visible) => setPopupVisible(visible)}
      >
        <Panel dateValue={dateValue} onChange={onPanelChange} />
      </Popup>
    </section>
  );
}

DatePicker.propTypes = {
  defaultValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
