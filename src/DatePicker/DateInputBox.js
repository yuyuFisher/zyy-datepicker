import PropTypes from 'prop-types';
import CalendarOrClear from './CalendarOrClose';

export default function DateInputBox({ value, onClear }) {
  return (
    <header>
      <input
        className="date-input"
        placeholder="选择日期"
        disabled
        value={value}
      />
      <CalendarOrClear isShowCalendar={!!value} onClear={onClear} />
    </header>
  );
}

DateInputBox.propTypes = {
  value: PropTypes.string,
  onClear: PropTypes.func,
};
