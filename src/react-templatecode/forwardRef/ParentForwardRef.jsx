import React, { useRef } from 'react';
import MyInput from './MyInput';

const ParentForwardRef = () => {
      const ref = useRef(null);
      return (
        <>
          <button onClick={() => ref.current.play()}>
            Play
          </button>
          <button onClick={() => ref.current.pause()}>
            Pause
          </button>
          <br />
          <MyInput
            ref={ref}
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
            width="250"
          />
        </>)
  };

  export default ParentForwardRef;