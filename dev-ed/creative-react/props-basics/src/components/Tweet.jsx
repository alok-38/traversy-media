const Tweet = ({ author, message, onDelete, index }) => {
  return (
    <div>
      <h2>{author}</h2>
      <h3>{message}</h3>
      <button onClick={() => onDelete(index)}>Delete</button>
      <button>Like</button>
    </div>
  );
};

export default Tweet;
