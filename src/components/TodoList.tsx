import React from 'react';
import styled from 'styled-components';

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
`;

const List = styled.ol`
  text-align: left;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  font-weight: bold;
  margin: 1rem 2rem;
`;

const Check = styled.input`
  margin-right: 0.5rem;
`;

interface Todo {
  text: string;
}

interface Props {
  todos: Array<Todo>;
}

const ToodList: React.FC<Props> = ({ todos }) => {
  return (
    <Container>
      <List>
        {todos.map((item, index) => {
          return (
            <Item key={`task-title-${index}`}>
              <ItemContainer>
                <Check
                  type="checkbox"
                  key={`task-${index}`}
                  name={`task-${index}`}
                  value={index}
                />
                <div>{item.text}</div>
              </ItemContainer>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

export { ToodList };
