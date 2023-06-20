import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

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
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <Link to='/todos/'>이전으로</Link>
    </div>
  );
};

export default TodoDetail;
