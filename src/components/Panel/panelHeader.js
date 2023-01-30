import PropTypes from 'prop-types';
import ArrowIcons from './arrowIcons';

export default function PanelHeader(props) {
  return (
    <div className="date-panel-header">
      <ArrowIcons
        classNameYear="iconfont icon-arrow-double-left"
        classNameMonth="iconfont icon-arrow-left-bold"
        onClickYear={props.onClickPreYear}
        onClickMonth={props.onClickPreMonth}
      />
      <span className="date-panel-header-center">{props.panelString}</span>
      <ArrowIcons
        classNameYear="iconfont icon-arrow-double-right"
        classNameMonth="iconfont icon-arrow-right-bold"
        onClickYear={props.onClickAddYear}
        onClickMonth={props.onClickAddMonth}
      />
    </div>
  );
}

PanelHeader.propTypes = {
  onClickPreYear: PropTypes.func,
  onClickPreMonth: PropTypes.func,
  panelString: PropTypes.string,
  onClickAddYear: PropTypes.func,
  onClickAddMonth: PropTypes.func,
};
