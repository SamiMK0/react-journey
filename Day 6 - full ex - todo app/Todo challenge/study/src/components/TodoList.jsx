import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function addTask(e) {
    e.preventDefault();

    if (input.trim() === "") {
      setError("Input can't be empty ❌");
      return;
    }

    setTodos((prev) => [...prev, input]);
    // setTodos([...todos, input]); 
    setInput("");
    setError("");
  }
  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <form onSubmit={addTask}>
      <label>Write the task here: </label>
      <input type="text" value={input} onChange={handleChange} />

   
      <br />
      <button type="submit">Add the task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
         {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
export default TodoList;
