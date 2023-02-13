import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import createDays from './utils/createDays';
import isSameDate from './utils/isSameDate';
import PanelItemOfDate from './panelItemOfDate';
import WeekHeader from './weekHeader';
import PanelHeader from './panelHeader';
import './index.css';

const now = dayjs();

export default function Panel({ onChange, dateValue }) {
  const [date, setDate] = useState(dateValue || now);
  const days = useMemo(() => createDays(date), [date]);
  const panelString = `${date.year()} 年 ${date.month() + 1} 月`;

  useEffect(() => {
    setDate(dateValue || now);
  }, [dateValue]);

  const jumpTo = (time, type, total) => {
    const newDate = dayjs(time).add(total, type);
    setDate(newDate);
  };

  const handleItemClick = (item) => {
    const { itemValue } = item;
    onChange(itemValue);
  };

  return (
    <section className="date-panel">
      <PanelHeader
        onClickPreYear={() => jumpTo(date, 'year', -1)}
        onClickPreMonth={() => jumpTo(date, 'month', -1)}
        panelString={panelString}
        onClickAddYear={() => jumpTo(date, 'year', 1)}
        onClickAddMonth={() => jumpTo(date, 'month', 1)}
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
  dateValue: PropTypes.instanceOf(dayjs),
  onChange: PropTypes.func,
};
