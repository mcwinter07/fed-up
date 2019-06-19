import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import img1 from '../assets/images/winners.jpg';

const TheResult = () => {
  return (
    <section className="section-block section--the-result">
      <h1>The Result</h1>
      <div className="the-result__image">
        <img src={img1} alt=""/>
      </div>
      <div className="twitter-feed">
        <div className="twitter-feed__tweet">
          <TwitterTweetEmbed
          tweetId={'1132787231821783040'}
          />
        </div>
        <div className="twitter-feed__tweet">
          <TwitterTweetEmbed
          tweetId={'1132902762902118400'}
          />
        </div>
        <div className="twitter-feed__tweet">
          <TwitterTweetEmbed
          tweetId={'1132182064747257856'}
          />
        </div>
        <div className="twitter-feed__tweet">
          <TwitterTweetEmbed
          tweetId={'1132177116605235201'}
          />
        </div>
        <div className="twitter-feed__tweet">
          <TwitterTweetEmbed
          tweetId={'1132069548553670656'}
          />
        </div>
        <div className="twitter-feed__tweet">
          <TwitterTweetEmbed
          tweetId={'1132187942162538496'}
          options={{cards: 'hidden',hideCard: true,hideThread: false}} 
          />
        </div>
      </div>
    </section>
  )
}

export default TheResult;