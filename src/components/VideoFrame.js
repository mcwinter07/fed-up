import React from 'react';

const VideoFrame = (props) => {
  const { vidSource } = props;
  return (
    <div className="video">
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={vidSource}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  )
}

export default VideoFrame;