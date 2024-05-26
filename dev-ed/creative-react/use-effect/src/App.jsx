import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({ name: "John Doe", age: 25 });

  useEffect(() => {
    const storeData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/store", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Data stored:", result);
      } catch (error) {
        console.error("Error storing data:", error);
      }
    };

    storeData();
  }, [data]);

  return (
    <div className="App">
      <h1>Store Data in MongoDB</h1>
      <p>Check the console for the result of the data storage.</p>
    </div>
  );
}

export default App;
