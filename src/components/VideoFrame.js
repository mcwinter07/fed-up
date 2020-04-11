import React from 'react';

const VideoFrame = (props) => {
  const { vidSource } = props;
  return (
    <div className="video">
      <div className="video-container">
        <iframe
          title={vidSource}
          key={vidSource}
          width="560"
          height="315"
          src={vidSource}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default VideoFrame;