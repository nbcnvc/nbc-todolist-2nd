import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const { workingTodos, doneTodos } = todos.reduce(
    (acc, todo) => {
      const todoComponent = <Todo key={todo.id} todo={todo} />;

      const isCompleted = todo.isCompleted;
      if (!isCompleted) {
        acc.workingTodos.push(todoComponent);
      } else if (isCompleted) {
        acc.doneTodos.push(todoComponent);
      }
      return acc;
    },
    { workingTodos: [], doneTodos: [] }
  );

  return (
    <div>
      <h1>working...</h1>
      <div>{workingTodos}</div>
      <h1>done...</h1>
      <div>{doneTodos}</div>
    </div>
  );
};

export default TodoList;
