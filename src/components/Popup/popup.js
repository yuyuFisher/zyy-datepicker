import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './popup.css';

export default function Popup(props) {
  const { visible, target, children } = props;
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const { left, top } = position;

  const getPopupPosition = () => {
    if (target.current) {
      const rect = target.current.getBoundingClientRect();
      position.left = rect.left;
      position.top = rect.top + 40;
    }
    return position;
  };

  useEffect(() => {
    setPosition(getPopupPosition());
  }, []);

  return ReactDOM.createPortal(
    <section
      className="date-popup"
      style={{ left, top, display: visible ? 'block' : 'none' }}
    >
      {children}
    </section>,
    document.body,
  );
}

Popup.propTypes = {
  visible: PropTypes.bool,
  getPopupPosition: PropTypes.func,
};
