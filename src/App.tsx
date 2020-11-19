import React, { useState } from 'react';
import './App.css';

interface Todo {
  title: string;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todo, setTodo] = useState<Todo>({ title: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ title: e.target.value });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (todo.title) setTodos([...todos, todo]);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
        <h2>Add todo:</h2>
        <form>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add a task..."
            onChange={(e) => handleChange(e)}
          />
          <button onClick={(e) => handleClick(e)}>Add</button>
        </form>
      </header>
      <main>
        <h2>Todos:</h2>
        <ul>
          {todos.map((item, index) => {
            return (
              <li key={index}>
                <strong>{item.title}</strong>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
