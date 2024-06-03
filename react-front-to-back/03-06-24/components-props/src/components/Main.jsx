import FeedBackItem from "./FeedBackItem";
import Header from "./Header";

export default function Main() {
  return (
    <>
      <Header text="Feedback UI" />
      <main className="container">
        <FeedBackItem />
      </main>
    </>
  );
}
