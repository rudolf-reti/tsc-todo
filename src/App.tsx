import React from 'react';
import './App.css';
import { useTodos } from './hooks';
import { ToodInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

function App(): JSX.Element {
  const {
    todo,
    todos,
    handleChange,
    handleClick,
    handleDone,
    handleRemove,
  } = useTodos();

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
        <TodoList
          todos={todos}
          handleDone={handleDone}
          handleRemove={handleRemove}
        />
      </main>
    </div>
  );
}

export default App;
