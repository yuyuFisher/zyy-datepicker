import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function CalendarOrClose(props) {
  const {
    dateValue = new Date(),
    onClose,
  } = props;
  return (
    <span
      className={classnames('date-pick-icon', {
        'calendar-show': dateValue,
      })}
    >
      <span className="iconfont icon-calendar" />
      <span className="iconfont icon-close" onClick={onClose} />
    </span>
  );
}

CalendarOrClose.propTypes = {
  dateValue: PropTypes.string,
  onClose: PropTypes.func,
};
