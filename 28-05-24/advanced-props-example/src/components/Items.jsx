import { useState } from "react";
import ItemList from "./ItemList";

const Items = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);

  const handleRemoveItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  return (
    <div className="App">
      <h1>Advanced Props Example</h1>
      <ItemList items={items} onRemoveItem={handleRemoveItem}>
        <p>This is a list of items that can be removed:</p>
      </ItemList>
    </div>
  );
};

export default Items;
