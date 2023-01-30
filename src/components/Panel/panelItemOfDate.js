import classnames from 'classnames';
import PropTypes from 'prop-types';
import { constant } from '../../utils/constants';

export default function PanelItemOfDate(props) {
  return (
    <div
      onClick={props.onClick}
      className={classnames('date-panel-body-item', {
        'date-panel-body-match': props.match,
        'date-panel-body-today': props.item.isToday,
        'date-panel-body-weekend': props.weekend,
        'date-panel-body-blur': props.item.type === constant.TYPE_PRE_MONTH || props.item.type === constant.TYPE_NEXT_MONTH,
      })}
    >
      <div className="date-panel-body-container">
        <div className="container-text">
          {props.item.isToday ? '今天' : props.item.text}
        </div>
      </div>
    </div>
  );
}

PanelItemOfDate.propTypes = {
  onClick: PropTypes.func,
  match: PropTypes.bool,
  weekend: PropTypes.bool,
  item: PropTypes.shape({
    itemValue: PropTypes.instanceOf(Date),
    text: PropTypes.number,
    type: PropTypes.oneOf(
      [constant.TYPE_PRE_MONTH, constant.TYPE_NOW_MONTH, constant.TYPE_NEXT_MONTH],
    ),
    value: PropTypes.string,
    isToday: PropTypes.bool,
  }),
};
