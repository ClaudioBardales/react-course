import React from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  const name = 'Claudio';
  const message = 'I went to sleep today';
  return (
    <div>
      <div className="text">
        <h1>Hello</h1>
        <CreateTweet />
        <TweetList name={name} message={message} />
      </div>
    </div>
  );
}

export default App;
