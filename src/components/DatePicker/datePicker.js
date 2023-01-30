import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import { formatDateAtInput } from '../../utils/formatDate';
import getDomParents from '../../utils/getDomParents';
import uuid from '../../utils/uuid';
import Popup from '../Popup/popup';
import Panel from '../Panel/panel';
import DateInputBox from './dateInputBox';

import './datePicker.css';

export default function DatePicker(props) {
  const {
    defaultValue = new Date(),
    onChange,
  } = props;
  const [value, setValue] = useState(defaultValue);
  const [popupVisible, setPopupVisible] = useState(false);
  const rootRef = useRef(null);
  const panelIdRef = useRef(uuid('date'));
  const dateString = useMemo(() => (value ? formatDateAtInput(value) : ''), [value]);

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

  const onPanelChange = (date) => {
    setValue(date);
    setTimeout(() => {
      setPopupVisible(false);
    }, 0);
  };

  return (
    <section className="head" ref={rootRef} onClick={handleDatepickerClick}>
      <DateInputBox value={dateString} onClick={handleClear} />
      <Popup visible={popupVisible} root={rootRef}>
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
