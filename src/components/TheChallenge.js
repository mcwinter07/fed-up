import React from 'react';
import Quote from './Quote';
import InfoCard from './InfoCard';
import img1 from '../assets/images/challenge-1.jpg';
import img2 from '../assets/images/challenge-2.jpg';
import img3 from '../assets/images/challenge-3.jpg';

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
      text: 'Posed with the above question to answer in eight hours, 60 members of the public sharing a common love for the city of Melbourne came together and formed into 10 teams for Hack Fed Square, a design hack competition run by Fed Square and Marketing Entourage as part of Melbourne Knowledge Week, competing against each other and a tight eight hour deadline to come up with innovative concepts to address this problem statement and pitch to a judging panel.',
      isRightAligned: false
    },
    {
      imgSource: img2,
      alt: 'Federation Square\'s Reshaping Your Experiences branding',
      text: 'Faced with increased competition from neighbouring live sites, culinary precincts and event offerings coupled with decreased visitation, we were tasked with dreaming up ways to create engaging and participatory experiences integrating pre-existing and new technologies that celebrate its "Anything But Square" brand style, voice and concept. The ultimate goal was reframe public perception of Fed Square as a vibrant, ever-changing, cultural hub with a focus on community and sustainability, cementing its position as a iconic Melburnian destination.',
      isRightAligned: true
    },
    {
      imgSource: img3,
      alt: 'Federation Square screen',
      text: 'Much like city and space itself, our team Fed Up represented a kaleidoscope of Melburnians from a broad range of backgrounds and destinations - born and bred locals, interstate adopters and expats from abroad - ultimately defining our target user: self-identified Melburnians seeking substantive experiences.',
      isRightAligned: false
    }
  ]
}

const TheChallenge = () => {
  return (
    <section className="section-content section-content--the-challenge">
      <h1 className="section-header">The Challenge</h1>
      <Quote
        quoteText={challenges.quotes[0].quoteText}
      />
      {challenges.articles.map(article => {
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

export default TheChallenge;