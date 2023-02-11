import PropTypes from 'prop-types';
import ArrowIcons from './arrowIcons';

export default function PanelHeader({
  panelString, onClickPreYear, onClickPreMonth, onClickAddYear, onClickAddMonth,
}) {
  return (
    <header className="date-panel-header">
      <ArrowIcons
        classNameYear="iconfont icon-arrow-double-left"
        classNameMonth="iconfont icon-arrow-left-bold"
        onClickYear={onClickPreYear}
        onClickMonth={onClickPreMonth}
      />
      <span className="date-panel-header-center">{panelString}</span>
      <ArrowIcons
        classNameYear="iconfont icon-arrow-double-right"
        classNameMonth="iconfont icon-arrow-right-bold"
        onClickYear={onClickAddYear}
        onClickMonth={onClickAddMonth}
      />
    </header>
  );
}

PanelHeader.propTypes = {
  panelString: PropTypes.string,
  onClickPreYear: PropTypes.func,
  onClickPreMonth: PropTypes.func,
  onClickAddYear: PropTypes.func,
  onClickAddMonth: PropTypes.func,
};
