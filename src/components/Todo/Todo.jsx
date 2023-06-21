import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { todosAction } from "../../store/todos";
import { useState } from "react";

const Button = styled.button`
  background: skyblue;
  padding: 5px 10px;
  border: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
`;

const TodoCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 3px solid #008080;
  border-radius: 10px;

  & button {
    margin-right: 10px;
  }

  & input {
    display: block;
    margin: 8px 0;
  }
   & span {
    text-decoration: none;
    font-size: 12px;
    margin-left: 10px;
  }
`;

const Todo = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: todo.title,
    content: todo.content,
  });
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(todosAction.toggleStatus(todo));
  };
  const removeHandler = () => {
    dispatch(todosAction.removeTodo(todo));
  };
  const isEditingHandler = () => {
    setIsEditing(true);
  };
  const editHandler = () => {
    const newTodo = {
      id: todo.id,
      title: editedTodo.title,
      content: editedTodo.content,
    };
    console.log(newTodo);
    dispatch(todosAction.updateTodo(newTodo));
    setIsEditing(false);
  };
  const changeTitleHandler = (e) => {
    setEditedTodo((prevState) => {
      return {
        title: e.target.value,
        content: prevState.content,
      };
    });
  };
  const changeContentHandler = (e) => {
    setEditedTodo((prevState) => {
      return {
        title: prevState.title,
        content: e.target.value,
      };
    });
  };

  return (
    <TodoCard>
      <StyledLink to={`/todos/${todo.id}/`}>상세보기</StyledLink>
      <span onClick={isEditingHandler}>수정하기</span>
      {isEditing ? (
        <input
          type="text"
          placeholder="제목을 입력해 주세요"
          onChange={changeTitleHandler}
          value={editedTodo.title}
        />
      ) : (
        <h4>{todo.title}</h4>
      )}
      {isEditing ? (
        <input
          type="text"
          placeholder="내용을 입력해 주세요"
          onChange={changeContentHandler}
          value={editedTodo.content}
        />
      ) : (
        <p>{todo.content}</p>
      )}
      {isEditing ? (
        <Button onClick={editHandler}>수정</Button>
      ) : (
        <>
          <Button onClick={removeHandler}>삭제</Button>
          <Button onClick={toggleHandler}>
            {todo.isCompleted ? "취소" : "완료"}
          </Button>
        </>
      )}
    </TodoCard>
  );
};

export default Todo;
