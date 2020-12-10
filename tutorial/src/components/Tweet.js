import React from 'react';
import styled from 'styled-components';

const Tweet = ({ name, tweet, tweets, setTweets }) => {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };

  return (
    <TweetStyle>
      <h2 className="title">{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>Delete</button>
      <button>Like</button>
    </TweetStyle>
  );
};

const TweetStyle = styled.div`
  background-color: #17da51;
  border-radius: 3px;
  margin: 0 3em;
  padding: 3px;
`;

export default Tweet;
