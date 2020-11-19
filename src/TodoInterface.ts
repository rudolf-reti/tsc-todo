export interface ITodo {
  text: string;
  done: boolean;
}

export interface ITodos {
  todo: ITodo;
  todos: Array<ITodo>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleDone: (index: number) => void;
  handleRemove: (index: number) => void;
}

export interface ITodoInputProps {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface ITodoListProps {
  todos: Array<ITodo>;
  handleDone: (index: number) => void | undefined;
  handleRemove: (index: number) => void | undefined;
}
