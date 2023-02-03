import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import getDomParents from './utils/getDomParents';
import './popup.css';

export default function Popup(props) {
  const {
    visible, onVisibilityChange, target, children,
  } = props;
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const { left, top } = position;
  const nodeRef = useRef(null);

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
      const paths = getDomParents(e.target);
      const isClickAway = !paths.includes(nodeRef.current);

      if (isClickAway) {
        onVisibilityChange(false);
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
    <CSSTransition
      in={visible}
      timeout={200}
      classNames="popup" // 动画名
    >
      <section
        ref={nodeRef}
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
  target: PropTypes.shape({}), // rootRef
  onVisibilityChange: PropTypes.func, // function to change visible of Popup
};
