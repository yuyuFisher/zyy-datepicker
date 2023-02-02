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
     // 在没有 timezone 设置的情况下，使用 `Date` 作为 DatePicker 的存储类型是比较危险的。
     // defaultValue可能来自别的系统，而onChange里的timezone又用的是当前系统里。最终可能导致编辑日期时，看到默认选中的日期和上次保存的不一致，或者修改后，明明选的是同一日，却得到不同的date对象。
     // 如果不牵扯time计算的话，使用year month day 会简化一些。
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
    // 不能去掉 setTimeout?
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
