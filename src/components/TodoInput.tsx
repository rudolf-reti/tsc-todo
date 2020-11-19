import React from 'react';
import styled from 'styled-components';
import { ITodoInputProps } from '../TodoInterface';

const Form = styled.form`
  width: 100%;
  max-width: 40rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  border: 0;
  border-right: 1px solid #282c34;
  height: 2rem;
  padding: 0 0.5rem;
  width: 90%;
`;

const AddButton = styled.button`
  border: 0;
  height: 2rem;
  padding: 0 1.5rem;
`;

const ToodInput: React.FC<ITodoInputProps> = ({
  text,
  handleChange,
  handleClick,
}) => {
  return (
    <Form>
      <Container>
        <Input
          type="text"
          name="todo"
          id="todo"
          value={text}
          placeholder="Add a task..."
          onChange={(e) => handleChange(e)}
        />
        <AddButton onClick={(e) => handleClick(e)}>Add</AddButton>
      </Container>
    </Form>
  );
};

export { ToodInput };
