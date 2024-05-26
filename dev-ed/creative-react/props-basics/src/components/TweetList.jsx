import Tweet from "./Tweet";

const TweetList = ({ tweets, deleteTweet }) => {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <Tweet
          key={index}
          author={tweet.author}
          message={tweet.message}
          onDelete={deleteTweet}
          index={index}
        />
      ))}
    </div>
  );
};

export default TweetList;
