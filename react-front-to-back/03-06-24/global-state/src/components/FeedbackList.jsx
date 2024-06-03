import FeedBackItem from "./FeedBackItem";

export const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
};
