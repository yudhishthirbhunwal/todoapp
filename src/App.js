import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState(["Write a task.", "Click on Add button to add it to the list."])

  function createTodo(event) {
    event.preventDefault();

    return setTodos(todos => {
      setTask("")
      return [...todos, task]
    })
  }

  return (
    <div className="App">
      <h1>Add Todo List</h1>
      <form onSubmit={createTodo}>
        <input type="text" value={task}
                onChange={e => {
                  setTask(e.target.value)
        }} />
        <button type="submit">Add</button>
      </form>
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })}
        </ul>
    </div>
  );
}

export default App;
