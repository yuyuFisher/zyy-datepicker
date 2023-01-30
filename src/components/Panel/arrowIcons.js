import PropTypes from 'prop-types';

export default function ArrowIcons(props) {
  return (
    <aside>
      <span
        className={props.classNameYear}
        onClick={props.onClickYear}
      />
      <span
        className={props.classNameMonth}
        onClick={props.onClickMonth}
      />
    </aside>
  );
}

ArrowIcons.propTypes = {
  onClickYear: PropTypes.func,
  onClickMonth: PropTypes.func,
  classNameYear: PropTypes.string,
  classNameMonth: PropTypes.string,
};
