import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function CalendarOrClose(props) {
  return (
    <span
      className={classnames('iconfont', {
        'calendar-show': props.dateString,
      })}
    >
      <span className="iconfont icon-calendar" />
      <span className="iconfont icon-close" onClick={props.onClick} />
    </span>
  );
}

CalendarOrClose.propTypes = {
  dateString: PropTypes.string,
  onClick: PropTypes.func,
};
