import React from 'react';
import MediaSwiper from './MediaSwiper';
import img1 from '../assets/images/links-1';
import img2 from '../assets/images/links-2';
import img3 from '../assets/images/links-3';

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
        writerHandle: 'https://medium.com/@anneliesefindlay',
        image: img3,
        url: 'https://medium.com/@anneliesefindlay/design-hack-fed-square-2019-de101e74b2b5'
      },
    ]
  }
  return (
    <section className="related-links">
      {media.articles.map(article => {
        const { title, source, writer, writerHandle, image, url } = article;
        return (
          <div>
            
          </div>
        )
      })}
    </section>
  )
}

export default RelatedLinks;