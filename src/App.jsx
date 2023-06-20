import Header from "./components/Header";
import TodoDetail from "./components/TodoDetail/TodoDetail";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/todos',
    element: <App />
  },
  {
    path: '/todos/:todoId',
    element: <TodoDetail />
  }
])

function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
