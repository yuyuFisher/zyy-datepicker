import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './popup.css';

export default function Popup(props) {
  const {
    visible, onVisibilityChange, targetRef, children,
  } = props;
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const { left, top } = position;
  const popupRef = useRef(null);

  const getPopupPosition = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const height = targetRef.current.clientHeight;
      return { left: rect.left, top: rect.top + height };
    }
    return position;
  };

  useEffect(() => {
    const callback = (e) => {
      if (!popupRef.current.contains(e.target)) {
        onVisibilityChange(false);
      }
    };
    document.addEventListener('mousedown', callback);
    return () => {
      document.removeEventListener('mousedown', callback);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      setPosition(getPopupPosition());
    }
  }, [visible]);

  return ReactDOM.createPortal(
    <CSSTransition
      in={visible}
      timeout={200}
      classNames="popup" // 动画名
    >
      <section
        ref={popupRef}
        className="date-popup"
        style={{ left, top }}
      >
        {children}
      </section>
    </CSSTransition>,
    document.body,
  );
}

Popup.propTypes = {
  visible: PropTypes.bool,
  targetRef: PropTypes.shape({}), // rootRef用于getPopupPosition
  onVisibilityChange: PropTypes.func, // function to change visible of Popup
};
