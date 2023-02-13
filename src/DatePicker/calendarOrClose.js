import classnames from 'classnames';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

export default function CalendarOrClose(props) {
  const {
    dateValue = dayjs(),
    onClear,
  } = props;
  return (
    <span
      className={classnames('date-pick-icon', {
        'calendar-show': dateValue,
      })}
    >
      <span className="iconfont icon-calendar" />
      <span className="iconfont icon-close" onClick={onClear} />
    </span>
  );
}

CalendarOrClose.propTypes = {
  dateValue: PropTypes.string,
  onClear: PropTypes.func,
};
