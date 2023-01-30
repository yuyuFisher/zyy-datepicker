import PropTypes from 'prop-types';

export default function ArrowIcons(props) {
  return (
    <span className="icons">
      <span
        className={props.classNameYear}
        onClick={props.onClickYear}
      />
      <span
        className={props.classNameMonth}
        onClick={props.onClickMonth}
      />
    </span>
  );
}

ArrowIcons.propTypes = {
  onClickYear: PropTypes.func,
  onClickMonth: PropTypes.func,
  classNameYear: PropTypes.string,
  classNameMonth: PropTypes.string,

};
