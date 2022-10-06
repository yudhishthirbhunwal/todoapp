import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState(["Write a task.", "Click on Add button to add it to the list."])

  function createTodo() {
    return setTodos(todos => {
      setTask("")
      return [...todos, task]
    })
  }

  function createOnEnter(e) {
    if (e.keyCode === 13) {
      createTodo()
    }
  }

  return (
    <div className="App">
      <h1>Add Todo List</h1>
        <input type="text" value={task} onKeyDown={createOnEnter} onChange={e => {
          setTask(e.target.value)
        }} />
        <button onClick={createTodo}>Add</button>
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })}
        </ul>
    </div>
  );
}

export default App;
