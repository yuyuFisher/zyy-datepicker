import classnames from 'classnames';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import monthCodeMap from './utils/monthCodeMap';

export default function PanelItemOfDate(props) {
  const { onClick, match, item } = props;
  return (
    <div
      onClick={onClick}
      className={classnames('date-panel-body-item', {
        'date-panel-body-match': match,
        'date-panel-body-today': item.isToday,
        'date-panel-body-blur':
            item.type === monthCodeMap.TYPE_PREVIOUS_MONTH
            || item.type === monthCodeMap.TYPE_NEXT_MONTH,
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
    itemValue: PropTypes.instanceOf(dayjs),
    text: PropTypes.number,
    type: PropTypes.oneOf([
      monthCodeMap.TYPE_PREVIOUS_MONTH,
      monthCodeMap.TYPE_CURRENT_MONTH,
      monthCodeMap.TYPE_NEXT_MONTH,
    ]),
    dateValue: PropTypes.string,
    isToday: PropTypes.bool,
  }),
};
