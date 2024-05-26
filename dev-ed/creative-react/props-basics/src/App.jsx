import  { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (author, message) => {
    const newTweet = { author, message };
    setTweets([newTweet, ...tweets]);
  };

  const deleteTweet = (index) => {
    setTweets(tweets.filter((tweet, tweetIndex) => tweetIndex !== index));
  };

  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet addTweet={addTweet} />
      <TweetList tweets={tweets} deleteTweet={deleteTweet} />
    </div>
  );
}

export default App;
