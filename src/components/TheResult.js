import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import img1 from '../assets/images/winners.jpg';

const TheResult = () => {
  const twitterSnippets = {
    tweets: [
      {
        description: 'Tweet from @lindalogical',
        tweetId: '1132787231821783040',
        options: null
      },
      {
        description: 'Tweet from @mktgentourage',
        tweetId: '1132902762902118400',
        options: null
      },
      {
        description: 'Tweet from @nativeknowmad',
        tweetId: '1132182064747257856',
        options: null
      },
      {
        description: 'Tweet from @phoriatech',
        tweetId: '1132177116605235201',
        options: null
      },
      {
        description: 'Tweet from @knowledgemelb',
        tweetId: '1132069548553670656',
        options: null
      },
      {
        description: 'Tweet from @Samueltates',
        tweetId: '1132187942162538496',
        options: {
          cards: 'hidden',
          hideCard: true,
          hideThread: false
        }
      }
    ]
  }
  return (
    <section className="section-content the-result">
      <h1 className="section-header">The Result</h1>
      <div className="image__container">
        <img src={img1} alt="Hero featuring Team Fed Up and Hack Fed Square judges"/>
      </div>
      <div className="twitter">
        <div className="tweet">
          {twitterSnippets.tweets.map(tweet => {
            const { tweetId, options } = tweet;
            return (
              <TwitterTweetEmbed
                tweetId={tweetId}
                options={options}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TheResult;