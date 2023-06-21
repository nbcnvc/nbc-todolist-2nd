import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import TodoCard from "../ui/TodoCard";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const TodoDetail = () => {
  const { todoId } = useParams();
  const todo = useSelector((state) => {
    return state.todos.todos.find((todo) => {
      return todo.id === parseInt(todoId);
    });
  });

  return (
    <Container>
      <TodoCard todo={todo} />
    </Container>
  );
};

export default TodoDetail;
