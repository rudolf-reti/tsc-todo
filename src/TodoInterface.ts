export interface ITodo {
  text: string;
  done: boolean;
}

export interface ITodos {
  todo: ITodo;
  todos: Array<ITodo>;
  handleChange: () => void;
  handleClick: () => void;
  handleDone: () => void;
  handleRemove: () => void;
}
