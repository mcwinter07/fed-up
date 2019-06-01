import React from 'react'
import Quote from './Quote';
import InfoCard from './InfoCard';
import img1 from '../assets/images/process-1.jpg';
import img2 from '../assets/images/process-2.jpg';


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
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.',
      isRightAligned: false
    },
    {
      imgSource: img2,
      alt: 'Work on laptops and post it notes',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam itaque deleniti enim, repudiandae a quae culpa veniam atque dicta ad illum porro, exercitationem labore ex ipsam excepturi est sint consequatur.',
      isRightAligned: true
    }
  ]
}

 const TheProcess = () =>{
  return (
    <section className="the-process">
    <h1>The Process</h1>
      <Quote
        quoteText={processes.quotes[0].quoteText}
      />
      {processes.articles.map(article => {
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

export default TheProcess;