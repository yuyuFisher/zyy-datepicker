import { useRef, useState } from 'react';
import Popup from '../../Popup';

export default function PopupDemo() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef();

  return (
    <div>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setVisible(true)}
      >
        trigger popup
      </button>
      <Popup
        visible={visible}
        targetRef={buttonRef}
        onVisibilityChange={(isVisible) => setVisible(isVisible)}
      >
        I am a popup
      </Popup>
    </div>
  );
}
