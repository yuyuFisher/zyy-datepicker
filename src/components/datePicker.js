import '../styles/datePicker.css';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import formatDate from '../utils/util';

export default function DatePicker(props) {
  const {
    placeholder = '选择日期',
    defaultValue = new Date(),
    onChange,
  } = props;
  const [value, setValue] = useState(defaultValue);
  const rootRef = useRef(null);
  const dateString = useMemo(() => (value ? formatDate(value) : ''), [value]);

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  const handleClear = (e) => {
    setValue('');
    e.stopPropagation();
  };

  return (
    <header className="head" ref={rootRef}>
      <input
        className="date-input"
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        disabled
        value={dateString}
      />
      <span
        className={classnames('iconfont', {
          'calendar-show': dateString,
        })}
      >
        <span className="iconfont icon-calendar" />
        <span className="iconfont icon-close" onClick={handleClear} />
      </span>
    </header>
  );
}

DatePicker.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
