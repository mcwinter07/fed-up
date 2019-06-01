import React from 'react';

const PitchCard = (props) => {
  const { imgSource, alt, text } = props;
  return (
    <div className="pitch-card">
      <div className="pitch-card__image-container">
        <img src={imgSource} alt={alt}/>
      </div>
      <p>
        {text}
      </p>
    </div>
  )
}

export default PitchCard;