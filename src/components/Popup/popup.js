import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import getDomParents from './utils/getDomParents';
import uuid from './utils/uuid';
import './popup.css';

export default function Popup(props) {
  const {
    visible, onVisible, target, children,
  } = props;
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const { left, top } = position;
  const popupRef = useRef(uuid('popup'));

  const getPopupPosition = () => {
    if (target.current) {
      const rect = target.current.getBoundingClientRect();
      position.left = rect.left;
      position.top = rect.top + 40;
    }
    return position;
  };

  useEffect(() => {
    const callback = (e) => {
      const popupDiv = document.querySelector(`#${popupRef.current}`);
      const paths = getDomParents(e.target);
      const isClickAway = !paths.includes(popupDiv);

      if (isClickAway) {
        onVisible(false);
      }
    };
    document.addEventListener('mousedown', callback);
    return () => {
      document.removeEventListener('mousedown', callback);
    };
  }, []);

  useEffect(() => {
    setPosition(getPopupPosition());
  }, []);

  return ReactDOM.createPortal(
    <section
      id={popupRef.current}
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
