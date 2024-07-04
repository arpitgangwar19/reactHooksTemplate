import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const TextInput = (props, ref) => {
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (localRef.current) {
        localRef.current.value = '';
        localRef.current.focus();
      }
    },
  }));

  return <input type="text" ref={localRef} />;
};

export default forwardRef(TextInput);
