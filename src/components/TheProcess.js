import React from 'react'
import Quote from './Quote';
import InfoCard from './InfoCard';
import VideoFrame from './VideoFrame';
import img1 from '../assets/images/process-1.jpg';
import img2 from '../assets/images/process-2.jpg';
import img3 from '../assets/images/process-3.jpg';

const processes = {
  quotes: [
    {
      quoteText: 'How might we connect Melburnians to Fed Square and connect Fed Square to ITSELF?!'
    }
  ],
  articles: [
    {
      imgSource: img1,
      alt: 'Fed Up team members Michael, Fotima and Linda',
      text: 'The heart of the creative process for the hack involved applying human-centred design thinking to identify and address a challenge for Fed Square that was open-ended, complex and loosely defined: namely how to deliver revenue-generating cultural experiences emblematic of Melbourne that will position Fed Square as a hub for creativity and innovation.',
      isRightAligned: false
    },
    {
      imgSource: img2,
      alt: 'Work on laptops and post it notes',
      text: 'Following an iterative design process to understand the human needs involved, reframe the problem in human-centric ways, brainstorm solutions and adopt a hands-on approach to prototyping and testing our ideas and assumptions, we applied the kaleidoscope metaphor figuratively and quite literally to our final concept as we felt this perfectly represented the vibrant and multi-faceted nature of the space and city.',
      isRightAligned: true
    },
    {
      imgSource: img3,
      alt: 'Fed Up team members Tim, Linda and TJ in discussion',
      text: 'Under the tutelage of our sage and knowing mentors from Marketing Entourage and PHORIA, a floodgate of ideas poured itself onto countless post-its decorating the walls of Deakin\'s Edge. Tempered by a ticking time clock and dose of reality, we eventually consolidated our ideas into a central core concept for our pitch.',
      isRightAligned: false
    }
  ]
}

 const TheProcess = () => {
  return (
    <section className="section-content section-content--the-process">
      <header className="section-header">
        <h1>THE PROCESS</h1>
      </header>
      <VideoFrame
        vidSource='https://www.youtube.com/embed/nAPXecjQAjY?controls=0'
      />
      <Quote
        quoteText={processes.quotes[0].quoteText}
      />
      {processes.articles.map(article => {
        const { imgSource, alt, text, isRightAligned } = article;
        return (
          <InfoCard
            key={alt}
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

export default TheProcess;