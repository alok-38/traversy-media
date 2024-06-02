const app = document.getElementById("app");

function App() {
  const title = "Blog title";
  const body = "This is a blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      <div>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(app);
root.render(<App />);
