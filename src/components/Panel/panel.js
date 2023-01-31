import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import createDays from './utils/createDays';
import isSameDate from './utils/isSameDate';
import skipTimes from './utils/skipTimes';
import PanelItemOfDate from './panelItemOfDate';
import WeekHeader from './weekHeader';
import PanelHeader from './panelHeader';

import './pannel.css';

const now = new Date();

export default function Panel(props) {
  const { onChange, id, value } = props; // 名字有意义
  const [date, setDate] = useState(value || now);
  const days = useMemo(() => createDays(date), [date]);
  const panelString = `${date.getFullYear()} 年 ${date.getMonth() + 1} 月`;

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
    <section className="date-panel" id={id}>
      <PanelHeader
        onClickPreYear={() => jumpTo('year', -1)}
        onClickPreMonth={() => jumpTo('month', -1)}
        panelString={panelString}
        onClickAddYear={() => jumpTo('year', 1)}
        onClickAddMonth={() => jumpTo('month', 1)}
      />
      <WeekHeader />
      <footer className="date-panel-body">
        {days.map((item) => {
          const isMatch = isSameDate(item.itemValue, value);
          return (
            <PanelItemOfDate
              key={`key-${item.value}`}
              onClick={() => handleItemClick(item)}
              match={isMatch}
              item={item}
            />
          );
        })}
      </footer>
    </section>
  );
}

Panel.propTypes = {
  id: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};
