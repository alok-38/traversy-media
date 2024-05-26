import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  // Handle input change event
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // Handle button click event
  const handleButtonClick = () => {
    alert("Button was clicked!");
  };

  // Handle form submission event
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSubmittedText(text);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Events Demo</h1>

        {/* Input Change Event */}
        <div>
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
        </div>

        {/* Button Click Event */}
        <div>
          <button onClick={handleButtonClick}>Click Me!</button>
        </div>

        {/* Form Submit Event */}
        <form onSubmit={handleFormSubmit}>
          <button type="submit">Submit</button>
        </form>

        {/* Display Submitted Text */}
        {submittedText && (
          <div>
            <h2>Submitted Text:</h2>
            <p>{submittedText}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
