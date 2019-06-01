import React from 'react';
import Quote from './Quote';
import InfoCard from './InfoCard';
import img1 from '../assets/images/challenge-1.jpg';
import img2 from '../assets/images/challenge-2.jpg';

const challenges = {
  quotes: [
    {
      quoteText: 'How can we ensure Fed Square remains one of Melbourne’s key cultural landmarks and iconic meeting places – a space where creativity, curiosity and inspiration collide?',
    }
  ],
  articles: [
    {
      imgSource: img1,
      alt: 'Federation Square',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.',
      isRightAligned: false
    },
    {
      imgSource: img2,
      alt: 'Federation Square branding',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.',
      isRightAligned: true
    }
  ]
}

const TheChallenge = () => {
  return (
    <section className="the-challenge">
      <h1>The Challenge</h1>
      <Quote
        quoteText={challenges.quotes[0].quoteText}
      />
      {challenges.articles.map(article => {
        const { imgSource, alt, text, isRightAligned } = article;
        return (
          <InfoCard
            imgSource={imgSource}
            alt={alt}
            text={text}
            isRightAligned={isRightAligned}
          />
        )
      })}
    </section>
  )
}

export default TheChallenge;