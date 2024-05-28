import FeedbackItem from "./FeedbackItem";
import Header from "./Header";

export default function Main() {
  return (
    <>
      <Header text="feedback UI" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}
