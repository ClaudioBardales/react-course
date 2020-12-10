import React, { useState, useEffect } from 'react';
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  //State Lifting Example
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState('Dev Ed');
  const message = 'hello';

  useEffect(() => {
    console.log('We run a function');
  }, [textInput]);

  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList
        setName={setName}
        name={name}
        tweets={tweets}
        setTweets={setTweets}
      />
    </div>
  );
}

export default App;
