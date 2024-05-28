import { useState, useEffect } from "react";

export default function Variables() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const title = "Blog Post";
  const body = "This is my blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <div>
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
