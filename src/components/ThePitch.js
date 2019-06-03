import React from 'react';
import Quote from './Quote';
import VideoFrame from './VideoFrame';
import InfoCard from './InfoCard';
import PitchCard from './PitchCard';
import img1 from '../assets/images/pitch-1.jpg';
import img2 from '../assets/images/pitch-2.jpg';
import img3 from '../assets/images/pitch-3.jpg';

import img4 from '../assets/images/pitch-garden.jpg';
import img5 from '../assets/images/pitch-dreamtime.jpg';
import img6 from '../assets/images/pitch-art.jpg';

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
      text: 'Breaking up Fed Square into thematic zones representing a kaleidoscope of colours and experiences on offer at the space much like the city itself, our concept used augmented reality through both a physical kaleidoscope install and digital application to bring Fed Square\'s values of sustainability, history/tradition, and arts/culture to life via a digital garden, Aboriginal Dreamtime imagery and stories and interactive art in a mixed reality setting.',
      isRightAligned: false
    },
    {
      imgSource: img2,
      alt: 'Fed Up team member TJ answering questions from the judges',
      text: 'By blurring the lines between the augmented and actual world through both a digital and physical install, the space could increase community engagement and connection to the place and people through culture by creating a participatory, immersive and unpredictable mixed reality experience that could be easily accessed by a wide range of people, irrespective of age or technical ability/means.',
      isRightAligned: true
    },
    {
      imgSource: img3,
      alt: 'Fed Up team member TJ answering questions from the judges',
      text: 'The flexibility of the kaleidoscope metaphor allowed the concept to have a consistent thematic throughline yet be changeable and extendable throughout its lifetime of implementation. By increasing the foot traffic and dwell time of visitors, Fed Square would become more attractive to prospective tenants and sponsors',
      isRightAligned: false
    }
  ],
  prototypes: [
    {
      imgSource: img4,
      alt: 'Our mixed reality prototype of a digital garden',
      text: 'Juxtaposed against the so-called concrete jungle of the Atrium walls, a digital garden to promote sustainability, tranquility and connection in a mutual meditative space.'
    },
    {
      imgSource: img5,
      alt: 'Our mixed reality prototype for Aboriginal Dreamtime art and storytelling',
      text: 'Combining Aboriginal imagery and spoken word narration of Dreamtime stories and Indigenous history of the land visitors are standing to give a richer and more contextual experience.'
    },
    {
      imgSource: img6,
      alt: 'Our mixed reality prototype for interactive art',
      text: 'Celebrating the rich cultural contributions of the city by encouraging users to interact with Fed Square through virtual art, and share and collaborate with others to create a digital archive.'
    }
  ]
}

const ThePitch = () => {
  return (
    <section className="section-content the-pitch">
      <h1 className="section-header">The Pitch</h1>
      <VideoFrame
        vidSource='https://www.youtube.com/embed/sOJe3XRowmY'
      />
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