import React from 'react';
import styled from 'styled-components';
import { useTodos } from './hooks';
import { ToodInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

const AppContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  background-color: #282c34;
  display: flex;
  align-items: start;
  justify-content: center;
  min-height: 25vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HeaderContent = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin: 0.5em 0;
`;

const Main = styled.main`
  height: 75vh;
  width: 100%;
  overflow: auto;
`;

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
    <AppContainer>
      <Header>
        <HeaderContent>
          <Title>Todos</Title>
          <ToodInput
            text={todo.text}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </HeaderContent>
      </Header>
      <Main>
        <TodoList
          todos={todos}
          handleDone={handleDone}
          handleRemove={handleRemove}
        />
      </Main>
    </AppContainer>
  );
}

export default App;
