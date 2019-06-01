import React from 'react'

const InfoCard = (props) => {
  const { imgSource, alt, text, isRightAligned } = props;
  return (
    <div className={isRightAligned ? 'info-card info-card--right' : 'info-card'} >
      <div className="info-card__image-container">
        <img src={imgSource} alt={alt} />
      </div>
      <p>
        {text}
      </p>
    </div>
  )
}

export default InfoCard;