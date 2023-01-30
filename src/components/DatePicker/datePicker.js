import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import Popup from '../Popup/popup';
import Panel from '../Panel/panel';
import './datePicker.css';
import DateInputBox from './dateInputBox';
import formatDate from '../../utils/formatDate';
import getDomParents from '../../utils/getDomParents';
import uuid from '../../utils/uuid';

export default function DatePicker(props) {
  const {
    defaultValue = new Date(),
    onChange,
  } = props;
  const [value, setValue] = useState(defaultValue);
  const rootRef = useRef(null);
  const panelIdRef = useRef(uuid('date'));
  const dateString = useMemo(() => (value ? formatDate(value) : ''), [value]);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  const handleClear = (e) => {
    setValue(null);
    setPopupVisible(false);
    e.stopPropagation();
  };

  useEffect(() => {
    const callback = (e) => {
      const panelDiv = document.querySelector(`#${panelIdRef.current}`);
      const paths = getDomParents(e.target);
      const isClickAway = !paths.includes(rootRef.current) && !paths.includes(panelDiv);

      if (isClickAway) {
        setPopupVisible(false);
      }
    };

    document.addEventListener('mousedown', callback);
    return () => {
      document.removeEventListener('mousedown', callback);
    };
  }, []);

  const handleDatepickerClick = () => {
    setPopupVisible(true);
  };

  const getPopupPosition = () => {
    const pos = { left: 0, top: 0 };
    if (rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      pos.left = rect.left;
      pos.top = rect.top + 40;
    }
    return pos;
  };

  const onPanelChange = (date) => {
    setValue(date);
    setTimeout(() => {
      setPopupVisible(false);
    }, 0);
  };

  return (
    <section className="head" ref={rootRef} onClick={handleDatepickerClick}>
      <DateInputBox value={dateString} onClick={handleClear} />
      <Popup visible={popupVisible} getPopupPosition={getPopupPosition}>
        <Panel
          id={panelIdRef.current}
          value={value}
          onChange={onPanelChange}
        />
      </Popup>
    </section>
  );
}

DatePicker.propTypes = {
  defaultValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
