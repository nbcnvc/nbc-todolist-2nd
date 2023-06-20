import { useDispatch } from "react-redux";
import { todosAction } from "../../store/todos";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(todosAction.toggleStatus(todo));
  };
  const removeHandler = () => {
    dispatch(todosAction.removeTodo(todo))
  }
  return (
    <div>
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
