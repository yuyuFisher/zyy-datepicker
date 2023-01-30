import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function CalendarOrClose(props) {
  return (
    <span
      className={classnames('date-pick-icon', {
        'calendar-show': props.value,
      })}
    >
      <span className="iconfont icon-calendar" />
      <span className="iconfont icon-close" onClick={props.onClick} />
    </span>
  );
}

CalendarOrClose.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
