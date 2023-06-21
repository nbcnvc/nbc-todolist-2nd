import { createBrowserRouter } from "react-router-dom";
import { styled } from "styled-components";

import Header from "./components/Header";
import TodoDetail from "./components/TodoDetail/TodoDetail";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todos/:todoId",
    element: <TodoDetail />,
  },
]);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;

  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <Header />
      <TodoForm />
      <TodoList />
    </Container>
  );
}

export default App;
