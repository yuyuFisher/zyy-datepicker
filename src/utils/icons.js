import PropTypes from 'prop-types';

export default function Icons(props) {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={props.iconName} />
    </svg>
  );
}

Icons.propTypes = {
  iconName: PropTypes.string.isRequired,
};
