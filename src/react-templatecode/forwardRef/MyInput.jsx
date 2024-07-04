import { forwardRef } from 'react';


const VideoPlayer = ({ src, type, width }, ref) => {
  return (
    <video width={width} ref={ref}>
      <source
        src={src}
        type={type}
      />
    </video>
  );
};

export default forwardRef(VideoPlayer);