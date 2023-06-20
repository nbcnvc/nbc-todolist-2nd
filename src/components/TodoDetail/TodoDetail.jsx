import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const { todoId } = useParams();
  const todo = useSelector((state) => {
    return state.todos.todos.find((todo) => {
      return todo.id === parseInt(todoId);
    });
  });

  return (
    <div>
      <h2>todo detail</h2>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
    </div>
  );
};

export default TodoDetail;
