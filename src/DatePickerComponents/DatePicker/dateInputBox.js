import PropTypes from 'prop-types';
import CalendarOrClose from './calendarOrClose';
import formatDate from './utils/formatDate';

export default function DateInputBox({ dateValue, onClose }) {
  return (
    <header>
      <input
        className="date-input"
        placeholder="选择日期"
        disabled
        value={formatDate(dateValue)}
      />
      <CalendarOrClose dateValue={dateValue} onClose={onClose} />
    </header>
  );
}

DateInputBox.propTypes = {
  dateValue: PropTypes.string,
  onClose: PropTypes.func,
};
