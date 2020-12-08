import React, { useState } from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  const [name, setName] = useState('Dev Ed');
  const message = 'Hello';
  return (
    <div>
      <div>
        <CreateTweet />
        <TweetList setName={setName} name={name} message={message} />
      </div>
    </div>
  );
}

export default App;
