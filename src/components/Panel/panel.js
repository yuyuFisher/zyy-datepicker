import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  skipYears,
  skipMonths,
} from '../../utils/util';
import './pannel.css';

const now = new Date();

export default function Panel(props) {
  const { id, value } = props;
  const [date, setDate] = useState(value || now);
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
    </div>
  );
}

Panel.propTypes = {
  id: PropTypes.string,
  value: PropTypes.instanceOf(Date),
};
