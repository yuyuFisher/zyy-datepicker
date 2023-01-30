import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import createDays from '../../utils/createDays';
import './pannel.css';
import { constant } from '../../utils/constants';
import isSameDate from '../../utils/isSameDate';
import skipTimes from '../../utils/skipTimes';
import { formatDateAtPanel } from '../../utils/formatDate';
import WeekHeader from './weekHeader';
import PanelHeader from './panelHeader';

const now = new Date();

export default function Panel(props) {
  const { onChange, id, value } = props;
  const [date, setDate] = useState(value || now);
  const days = useMemo(() => createDays(date), [date]);
  const panelString = formatDateAtPanel(date);

  useEffect(() => {
    setDate(value || now);
  }, [value]);

  const jumpTo = (type, total) => {
    const newDate = skipTimes(date, type, total);
    setDate(newDate);
  };

  const handleItemClick = (item) => {
    const { itemValue } = item;
    onChange(itemValue);
  };

  return (
    <div className="date-panel" id={id}>
      <PanelHeader
        onClickPreYear={() => jumpTo('year', -1)}
        onClickPreMonth={() => jumpTo('month', -1)}
        panelString={panelString}
        onClickAddYear={() => jumpTo('year', 1)}
        onClickAddMonth={() => jumpTo('month', 1)}
      />
      <WeekHeader />
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
