import FeedbackList from "./FeedbackList";
import Header from "./Header";
import { useState } from "react";

export default function Main() {
  const [feedback, setFeedback] = useState();
  return (
    <>
      <Header text="feedback UI" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}
