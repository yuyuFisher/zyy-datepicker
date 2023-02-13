import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function CalendarOrClose({ isShowCalendar, onClear }) {
  return (
    <span
      className={classnames('date-pick-icon', {
        'calendar-show': isShowCalendar,
      })}
    >
      <span className="iconfont icon-calendar" />
      <span className="iconfont icon-close" onClick={onClear} />
    </span>
  );
}

CalendarOrClose.propTypes = {
  isShowCalendar: PropTypes.bool,
  onClear: PropTypes.func,
};
