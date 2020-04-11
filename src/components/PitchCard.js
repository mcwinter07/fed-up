import React from 'react';

const PitchCard = (props) => {
  const { title, imgSource, alt, text } = props;
  return (
    <div className="pitch-card">
      <div className="pitch-card__image-container">
        <img src={imgSource} alt={alt}/>
      </div>
      <div className="pitch-card__title-container">
       <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default PitchCard;