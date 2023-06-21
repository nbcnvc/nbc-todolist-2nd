import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";

import { todosAction } from "../../store/todos";
import TodoInput from "../ui/TodoInput";

const Form = styled.form`
  height: 80px;
  border: 1px solid grey;
  padding: 0 10px;

  display: flex;
  align-items: center;
`

const TodoForm = () => {
  const [todoState, setTodoState] = useState({
    title: "",
    content: "",
    isCompleted: false,
  });
  const dispatch = useDispatch();

  const changeTitleHandler = (e) => {
    setTodoState((prevState) => {
      return {
        title: e.target.value,
        content: prevState.content,
      };
    });
  };
  const changeContentHandler = (e) => {
    setTodoState((prevState) => {
      return {
        title: prevState.title,
        content: e.target.value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!todoState.title || !todoState.content) {
      alert("제목과 내용을 모두 입력해 주세요.");
      return;
    }
    const newTodo = {
      title: todoState.title,
      content: todoState.content,
    };
    dispatch(todosAction.addTodo(newTodo));
    setTodoState({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <TodoInput
          idStr="title"
          labelStr="제목"
          changeHandler={changeTitleHandler}
          inputValue={todoState.title}
        />
        <TodoInput
          idStr="content"
          labelStr="내용"
          changeHandler={changeContentHandler}
          inputValue={todoState.content}
        />
        <button>제출</button>
      </Form>
    </div>
  );
};

export default TodoForm;
