const app = document.getElementById("app");

function App() {
  const title = "Blog title";
  const body = "This is a blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading ...</h1>;

  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {showComments ? (
        <div>
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        "No"
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<App />);
