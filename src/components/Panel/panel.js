import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import {
  skipYears,
  skipMonths,
  isSameDate,
  constant,
  createDays,
} from '../../utils/util';
import './pannel.css';

const now = new Date();

export default function Panel(props) {
  const { onChange, id, value } = props;
  const [date, setDate] = useState(value || now);
  const days = useMemo(() => createDays(date), [date]);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  useEffect(() => {
    setDate(value || now);
  }, [value]);

  const jumpTo = (type, total) => {
    let newDate;

    if (type === 'year') {
      newDate = skipYears(date, total);
    } else if (type === 'month') {
      newDate = skipMonths(date, total);
    }
    setDate(newDate);
  };

  const handleItemClick = (item) => {
    const { itemValue } = item;
    onChange(itemValue);
  };

  return (
    <div className="date-panel" id={id}>
      <div className="date-panel-header">
        <span className="icons">
          <span
            className="iconfont icon-arrow-double-left"
            onClick={() => jumpTo('year', -1)}
          />
          <span
            className="iconfont icon-arrow-left-bold"
            onClick={() => jumpTo('month', -1)}
          />
        </span>
        <div className="date-panel-header-center">
          {year}
          {' '}
          年
          {' '}
          {month}
          {' '}
          月
        </div>
        <span className="icons">
          <span
            className="iconfont icon-arrow-right-bold"
            onClick={() => jumpTo('month', 1)}
          />
          <span
            className="iconfont icon-arrow-double-right"
            onClick={() => jumpTo('year', 1)}
          />
        </span>
      </div>
      <div className="date-panel-th">
        <div className="date-panel-th-item date-panel-th-weekend">日</div>
        <div className="date-panel-th-item">一</div>
        <div className="date-panel-th-item">二</div>
        <div className="date-panel-th-item">三</div>
        <div className="date-panel-th-item">四</div>
        <div className="date-panel-th-item">五</div>
        <div className="date-panel-th-item date-panel-th-weekend">六</div>
      </div>
      <div className="date-panel-body">
        {days.map((item, index) => {
          const isWeekend = index % 7 === 0 || (index + 1) % 7 === 0;
          const isMatch = isSameDate(item.itemValue, value);
          return (
            <div
              key={`key-${item.value}`}
              onClick={() => handleItemClick(item)}
              className={classnames('date-panel-body-item', {
                'date-panel-body-match': isMatch,
                'date-panel-body-today': item.isToday,
                'date-panel-body-weekend': isWeekend,
                'date-panel-body-blur': item.type === constant.TYPE_PRE_MONTH || item.type === constant.TYPE_NEXT_MONTH,
              })}
            >
              <div className="date-panel-body-container">
                <div className="container-text">
                  {item.isToday ? '今天' : item.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Panel.propTypes = {
  id: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
