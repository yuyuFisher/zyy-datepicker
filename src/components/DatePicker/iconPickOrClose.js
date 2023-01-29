import PropTypes from 'prop-types';

export default function IconPickOrClose(props) {
  return (
    <span className={props.dateString ? 'calendar-show' : null}>
      <span className="iconfont icon-calendar" />
      <span className="iconfont icon-close" onClick={props.onClick} />
    </span>
  );
}

IconPickOrClose.propTypes = {
  dateString: PropTypes.string,
  onClick: PropTypes.func,
};
