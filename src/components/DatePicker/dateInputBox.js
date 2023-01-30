import PropTypes from 'prop-types';
import CalendarOrClose from './calendarOrClose';

export default function DateInputBox(props) {
  return (
    <header>
      <input
        className="date-input"
        type="text"
        autoComplete="off"
        placeholder="选择日期"
        disabled
        value={props.value}
      />
      <CalendarOrClose value={props.value} onClick={props.onClose} />
    </header>
  );
}

DateInputBox.propTypes = {
  value: PropTypes.string,
  onClose: PropTypes.func,
};
