import classnames from 'classnames';
import PropTypes from 'prop-types';
import { constant } from './utils/constants';

export default function PanelItemOfDate(props) {
  const { onClick, match, item } = props;
  return (
    <div
      onClick={onClick}
      className={classnames('date-panel-body-item', {
        'date-panel-body-match': match,
        'date-panel-body-today': item.isToday,
        'date-panel-body-blur':
            item.type === constant.TYPE_PRE_MONTH
            || item.type === constant.TYPE_NEXT_MONTH,
      })}
    >
      <div className="date-panel-body-container">
        <div className="container-text">
          {item.isToday ? '今天' : item.text}
        </div>
      </div>
    </div>
  );
}

PanelItemOfDate.propTypes = {
  onClick: PropTypes.func,
  match: PropTypes.bool,
  item: PropTypes.shape({
    itemValue: PropTypes.instanceOf(Date),
    text: PropTypes.number,
    type: PropTypes.oneOf([
      constant.TYPE_PRE_MONTH,
      constant.TYPE_NOW_MONTH,
      constant.TYPE_NEXT_MONTH,
    ]),
    dateValue: PropTypes.string,
    isToday: PropTypes.bool,
  }),
};
