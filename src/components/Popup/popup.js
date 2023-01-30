import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './popup.css';

export default function Popup(props) {
  const { visible, root, children } = props;
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const { left, top } = pos;

  const getPopupPosition = () => {
    if (root.current) {
      const rect = root.current.getBoundingClientRect();
      pos.left = rect.left;
      pos.top = rect.top + 40;
    }
    return pos;
  };

  useEffect(() => {
    setPos(getPopupPosition());
  }, []);

  return ReactDOM.createPortal(
    <div
      className="date-popup"
      style={{ left, top, display: visible ? 'block' : 'none' }}
    >
      {children}
    </div>,
    document.body,
  );
}

Popup.propTypes = {
  visible: PropTypes.bool,
  getPopupPosition: PropTypes.func,
};
