import React from 'react';
import MadeBy from './MadeBy';
import Swiper from 'react-id-swiper';
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';
// import SwiperCard from './SwiperCard';
import img1 from '../assets/images/links-1.jpg';
import img2 from '../assets/images/links-2.jpg';
import img3 from '../assets/images/links-3.jpg';
import img4 from '../assets/images/links-4.jpg';

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
        title: 'Design Hack in Action: #HackFedSquare Recap',
        source: 'Marketing Entourage',
        writer: 'Carly Layton',
        image: img3,
        url: 'https://www.marketingentourage.com.au/blog/design-hack-in-action-hackfedsquare-recap'
      },
      {
        title: 'Hack Fed Square',
        source: 'Daisy Tsen',
        writer: 'Daisy Tsen',
        writerHandle: 'https://medium.com/@anneliesefindlay',
        image: img4,
        url: 'https://www.daisytsen.com/melbourne-knowledge-week-2019'
      }
    ]
  }

  const params = {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <section className="section-content section-content--related-links">
      <header className="section-header">
        <h1>LINKS</h1>
      </header>
      <Swiper {...params} >
        {media.articles.map(article => {
          const { title, writer, image, url } = article;
          return (
          <div className="article-card" key={title}>
            <h2 className="article-name">{title}</h2>
            <h3 className="article-writer">{writer}</h3>
            <a href={url}>
              <img src={image} alt={title}/>
            </a>
          </div>
        )})}
      </Swiper>
      <MadeBy />
    </section>
  )
}

export default RelatedLinks;