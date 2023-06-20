import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { todosAction } from "../../store/todos";

const Button = styled.button`
  background: skyblue;
  padding: 5px 10px;
  border: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
`

const TodoCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 3px solid #008080;
  border-radius: 10px;

  & button {
    margin-right: 10px;
  }
`;

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(todosAction.toggleStatus(todo));
  };
  const removeHandler = () => {
    dispatch(todosAction.removeTodo(todo));
  };
  return (
    <TodoCard>
      <StyledLink to={`/todos/${todo.id}/`}>상세보기</StyledLink>
      <h4>{todo.title}</h4>
      <p>{todo.content}</p>
      <Button onClick={removeHandler}>삭제</Button>
      <Button onClick={toggleHandler}>
        {todo.isCompleted ? "취소" : "완료"}
      </Button>
    </TodoCard>
  );
};

export default Todo;
