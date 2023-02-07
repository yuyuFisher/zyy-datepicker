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
  const { onChange, dateValue } = props;
  const [date, setDate] = useState(dateValue || now);
  const days = useMemo(() => createDays(date), [date]);
  const panelString = `${date.getFullYear()} 年 ${date.getMonth() + 1} 月`;

  useEffect(() => {
    setDate(dateValue || now);
  }, [dateValue]);

  const jumpTo = (type, total) => {
    const newDate = skipTimes(date, type, total);
    setDate(newDate);
  };

  const handleItemClick = (item) => {
    const { itemValue } = item;
    onChange(itemValue);
  };

  return (
    <section className="date-panel">
      <PanelHeader
        onClickPreYear={() => jumpTo('year', -1)}
        onClickPreMonth={() => jumpTo('month', -1)}
        panelString={panelString}
        onClickAddYear={() => jumpTo('year', 1)}
        onClickAddMonth={() => jumpTo('month', 1)}
      />
      <WeekHeader />
      <footer className="date-panel-body">
        {days.map((item, index) => {
          const isMatch = isSameDate(item.itemValue, dateValue) && (item.text !== null);
          return (
            <PanelItemOfDate
              key={`key-${String(index)}`}
              onClick={() => handleItemClick(item)}
              match={isMatch}
              item={{
                itemValue: item.itemValue,
                text: item.text,
                type: item.type,
                dateValue: item.dateValue,
                isToday: item.isToday,
              }}
            />
          );
        })}
      </footer>
    </section>
  );
}

Panel.propTypes = {
  dateValue: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    date: PropTypes.number,
  }),
  onChange: PropTypes.func,
};
