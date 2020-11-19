import React, { useState } from 'react';
import './App.css';
import { ToodInput } from './components/TodoInput';
import { ToodList } from './components/TodoList';

interface Todo {
  text: string;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todo, setTodo] = useState<Todo>({ text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ text: e.target.value });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (todo.text) setTodos([...todos, todo]);
    setTodo({ text: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <ToodInput
          text={todo.text}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </header>
      <main>
        <h2>Todos:</h2>
        <ToodList todos={todos} />
      </main>
    </div>
  );
}

export default App;
