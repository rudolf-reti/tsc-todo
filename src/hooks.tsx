import React, { useState } from 'react';
import { ITodo, ITodos } from './TodoInterface';

const useTodos = (): ITodos => {
  const [todo, setTodo] = useState<ITodo>({ text: '', done: false });
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ text: e.target.value, done: false });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (todo.text) setTodos([...todos, todo]);
    setTodo({ text: '', done: false });
  };

  const handleDone = (index: number) => {
    if (todos.length > 0) {
      setTodos(
        todos.map((item, i) =>
          i === index ? { text: item.text, done: !item.done } : item,
        ),
      );
    }
  };

  const handleRemove = (index: number) => {
    if (todos.length > 0) {
      const newTodos = todos.filter((item, i) => i !== index);
      setTodos(newTodos);
    }
  };

  return { todo, todos, handleChange, handleClick, handleDone, handleRemove };
};

export { useTodos };
