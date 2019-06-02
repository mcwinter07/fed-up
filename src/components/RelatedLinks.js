import React from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';
import SwiperCard from './SwiperCard';
// import MediaSwiper from './MediaSwiper';
import img1 from '../assets/images/links-1.jpg';
import img2 from '../assets/images/links-2.jpg';
import img3 from '../assets/images/links-3.jpg';

const RelatedLinks = () => {
  const media = {
    articles: [
      {
        title: 'Ideas for the future flow at Hack Fed Square',
        source: 'Campaign Brief',
        writer: 'Ricki Green',
        writerHandle: null,
        image: img1,
        url: 'https://campaignbrief.com/ideas-for-the-future-flow-at-recent-hack-fed-square-event-part-of-melbourne-knowledge-week/'
      },
      {
        title: 'Ideas for the future of a cultural precinct',
        source: 'Medium',
        writer: 'Júlia Both',
        writerHandle: 'https://medium.com/@artofboth',
        image: img2,
        url: 'https://medium.com/@artofboth/ideas-for-the-future-of-a-cultural-precinct-d24a1b584d3b'
      },
      {
        title: 'Design Hack Fed Square 2019',
        source: 'Medium',
        writer: 'Anna Findlay',
        writerHandle: 'https://medium.com/@anneliesefindlay',
        image: img3,
        url: 'https://medium.com/@anneliesefindlay/design-hack-fed-square-2019-de101e74b2b5'
      }
    ]
  }

  const params = {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // dynamicBullets: true
    }
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // }
  };

  return (
    <section className="related-links">
      <Swiper {...params}>
      {/* {media.articles.map(article => {
        const { title, writer, image, url } = article;
        return (
          <SwiperCard
            title = {title}
            writer={writer}
            image={image}
            url={url}
          />
        )
      })} */}

      {media.articles.map(article => {
        const { title, source, writer, writerHandle, image, url } = article;
        return (
        <div className="article-card">
          
          <h4 className="article-name">{title}</h4>
          <h4 className="article-writer">{writer}</h4>
          <a href={url}>
            <img src={image} alt=""/>
          </a>
        </div>
      )})}

      </Swiper> 
    </section>
  )
}

export default RelatedLinks;