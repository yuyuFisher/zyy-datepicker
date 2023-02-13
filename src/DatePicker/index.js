import {
  useRef, useState,
} from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import formatDate from './utils/formatDate';
import DateInputBox from './DateInputBox';
import Popup from '../Popup';
import Panel from '../Panel';

import './index.css';

export default function DatePicker({ value, onChange }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const rootRef = useRef(null);

  const handleClear = (e) => {
    onChange(null);
    setPopupVisible(false);
    e.stopPropagation();
  };

  const handleDatepickerClick = () => {
    setPopupVisible(true);
  };

  const onPanelChange = (date) => {
    onChange(date);
    setPopupVisible(false);
  };

  return (
    <section>
      <section className="head" ref={rootRef} onClick={handleDatepickerClick}>
        <DateInputBox value={formatDate(value)} onClear={handleClear} />
      </section>
      <Popup
        visible={popupVisible}
        targetRef={rootRef}
        onVisibilityChange={(visible) => setPopupVisible(visible)}
      >
        <Panel value={value} onChange={onPanelChange} />
      </Popup>
    </section>
  );
}

DatePicker.propTypes = {
  value: PropTypes.instanceOf(dayjs),
  onChange: PropTypes.func,
};
