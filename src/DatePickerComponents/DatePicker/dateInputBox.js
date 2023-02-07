import PropTypes from 'prop-types';
import CalendarOrClose from './calendarOrClose';

export default function DateInputBox(props) {
  const { dateValue, onClose } = props;
  return (
    <header>
      <input
        className="date-input"
        type="text"
        autoComplete="off"
        placeholder="选择日期"
        disabled
        value={dateValue}
      />
      <CalendarOrClose dateValue={dateValue} onClose={onClose} />
    </header>
  );
}

DateInputBox.propTypes = {
  dateValue: PropTypes.string,
  onClose: PropTypes.func,
};
