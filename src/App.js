import React, { useState, useEffect } from 'react';
import './App.css';

let globalID = 1

function App() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  function createTodo(event) {
    event.preventDefault();

    return setTodos(todos => {
      setTask("")
      return [...todos, { id: globalID++, content: task }]
    })
  }

  function deleteTodo(itemID) {
    return setTodos(todos => todos.filter(todo => todo.id !== itemID))
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
          {todos.map((todo) => {
            return (
              <div key={todo.id}>
                <li>{todo.id} {todo.content}</li>
                <button onClick={() => deleteTodo(todo.id)}>DEL</button>
              </div>
            )
          })}
        </ul>
    </div>
  );
}

export default App;
