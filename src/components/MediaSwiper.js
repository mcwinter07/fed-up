import React from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';

const MediaSwiper = () => {
  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    }
  };
  return (
    <Swiper {...params}>
      <div>Hello</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper> 
  )
}

export default MediaSwiper;