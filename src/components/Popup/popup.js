import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/client';

export default function Popup(props) {
  const { visible, getPopupPosition } = props;
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const { left, top } = pos;

  useEffect(() => {
    setPos(getPopupPosition());
  }, []);

  return ReactDOM.createPortal(
    <div
      className="date-popup"
      style={{ left, top, display: visible ? 'block' : 'none' }}
    />,
    document.body,
  );
}

Popup.propTypes = {
  visible: PropTypes.bool,
  getPopupPosition: PropTypes.func,
};
