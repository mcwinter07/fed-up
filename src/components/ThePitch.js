import React from 'react';
import Quote from './Quote';
import InfoCard from './InfoCard';
import PitchCard from './PitchCard';
import img1 from '../assets/images/pitch-1.jpg';
import img2 from '../assets/images/pitch-2.jpg';
import img3 from '../assets/images/pitch-garden.jpg';
import img4 from '../assets/images/pitch-dreamtime.jpg';
import img5 from '../assets/images/pitch-art.jpg';

const solutions = {
  quotes: [
    {
      quoteText: 'Our pitch: a mixed reality experience that celebrates our devotion to art, history and sustainability.'
    }
  ],
  articles: [
    {
      imgSource: img1,
      alt: 'Fed Up team member Tush pitching to the judges',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.',
      isRightAligned: false
    },
    {
      imgSource: img2,
      alt: 'Fed Up team member TJ answering questions from the judges',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.',
      isRightAligned: true
    }
  ],
  prototypes: [
    {
      imgSource: img3,
      alt: 'Our mixed reality prototype of a digital garden',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.'
    },
    {
      imgSource: img4,
      alt: 'Our mixed reality prototype for Aboriginal dreamtime art and storytelling',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.'
    },
    {
      imgSource: img5,
      alt: 'Our mixed reality prototype for interactive art',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.'
    }
  ]
}

const ThePitch = () => {
  return (
    <section className="the-pitch">
      <div className="the-pitch__video">
        <div className="the-pitch__video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sOJe3XRowmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    <h1>The Process</h1>
    <Quote
      quoteText={solutions.quotes[0].quoteText}
    />
    {solutions.articles.map(article => {
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
    {solutions.prototypes.map(prototype => {
      const { imgSource, alt, text } = prototype;
      return (
        <PitchCard
          imgSource={imgSource}
          alt={alt}
          text={text}
        />
      )
    })}
  </section>
  )
}

export default ThePitch;