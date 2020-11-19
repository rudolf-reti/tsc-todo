import React from 'react';
import styled from 'styled-components';
import { ITodoListProps } from '../TodoInterface';

interface ITextProps {
  isDone: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  ${(props: ITextProps) =>
    props.isDone &&
    `&:before {
        content: '\u2713';
        color: green;
        margin-right: 0.1em;
    }`}
`;

const List = styled.ol`
  text-align: left;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  cursor: pointer;
  font-weight: 500;
  font-size: 1.2em;
  margin: 1rem 2rem;
`;

const Text = styled.div`
  text-decoration: ${(props: ITextProps) =>
    props.isDone ? 'line-through' : 'none'};
  color: ${(props: ITextProps) => (props.isDone ? 'grey' : 'black')};
`;

const Remove = styled.button`
  background-color: white;
  border: 1px solid #282c34;
  color: #282c34;
  cursor: pointer;
  font-weight: 500;
  margin-left: 1em;
`;

const TodoList: React.FC<ITodoListProps> = ({
  todos,
  handleDone,
  handleRemove,
}) => {
  return (
    <Container>
      <List>
        {todos.map((item, index) => {
          return (
            <Item key={`task-${index}`}>
              <ItemContainer isDone={item.done}>
                <Text
                  title={item.done ? 'reopen task' : 'complete task'}
                  isDone={item.done}
                  onClick={() => handleDone(index)}
                >
                  {item.text}
                </Text>
                <Remove title="remove task" onClick={() => handleRemove(index)}>
                  x
                </Remove>
              </ItemContainer>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export { TodoList };
