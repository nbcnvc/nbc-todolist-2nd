import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { todosAction } from "../../store/todos";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(todosAction.toggleStatus(todo));
  };
  const removeHandler = () => {
    dispatch(todosAction.removeTodo(todo));
  };
  return (
    <div>
      <Link to={`/todos/${todo.id}/`}>상세 페이지</Link>
      <div>{todo.title}</div>
      <div>{todo.content}</div>
      <button onClick={removeHandler}>delete</button>
      <button onClick={toggleHandler}>
        {todo.isCompleted ? "cancel" : "done"}
      </button>
    </div>
  );
};

export default Todo;
