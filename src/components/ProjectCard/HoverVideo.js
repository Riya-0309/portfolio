import React, { useRef } from 'react';

const HoverVideo = ({ videoSrc }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the beginning
    }
  };

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width="300"
      borderRadius="50%"
      border= "2px solid #000"
      muted
    />
  );
};

export default HoverVideo;
