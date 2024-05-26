import  { useState } from 'react';

const TodoList = () => {
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the current input value
  const [inputValue, setInputValue] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  // Render the component UI
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
