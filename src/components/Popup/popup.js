import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import getDomParents from './utils/getDomParents';
import './popup.css';

export default function Popup(props) {
  const {
    visible,
    onVisible, // 从最终调用的值来看，应该叫onVisibiltyChange、onHide之类的
    target,
    children,
  } = props;
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const { left, top } = position;
  const nodeRef = useRef(null);

  const getPopupPosition = () => { // 可能也要考虑children的尺寸大小
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
      const isClickAway = !paths.includes(nodeRef.current); // 考虑 `!nodeRef.current.contains(e.target)`, 或直接在children上stopPropagation

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
    setPosition(getPopupPosition()); // 可能需要考虑更多的计算位置的场景，比如页面resize导致布局变动。
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={visible}
      timeout={200}
      classNames="popup" // 动画名
      nodeRef={nodeRef} // 多余的？
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
  // 考虑把漏掉的类型也补进来，把不需要的去掉。
  // 一般看组件API就应该能看懂一个组件如何使用。
  // 考虑适当添加注释揭示意图。
  visible: PropTypes.bool,
  getPopupPosition: PropTypes.func,
};
