import React from 'react';

const SwiperCard = (props) => {
  const { title, writer, image, url } = props;
  return (
    <div className="article-card">
      <h4 className="article-name">{title}</h4>
      <h4 className="article-writer">{writer}</h4>
      <a href={url}>
        <img src={image} alt=""/>
      </a>
    </div>
  )
}

export default SwiperCard;