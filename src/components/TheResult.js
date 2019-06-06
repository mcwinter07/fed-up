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
      <p>
        After a mad mental sprint, each of the ten groups had three minutes to pitch their concept to a panel of judges and the public at large via the live stream on the Knowledge Melbourne and Fed Square Facebook pages in the hope that their idea could become a reality at Fed Square. In a room full of intensely creative and passionate people, who would be deemed the winner was anybody's guess, and we were humbled and totally stoked to have the chips fall our way this time.
      </p>
      <div className="twitter">
        <div className="tweet">
          {twitterSnippets.tweets.map(tweet => {
            const { tweetId, options } = tweet;
            return (
              <TwitterTweetEmbed
                key={tweetId}
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