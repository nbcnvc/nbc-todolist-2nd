import { useState } from "react";
import { useDispatch } from "react-redux";

import { todosAction } from "../../store/todos";

const TodoForm = () => {
  const [todoState, setTodoState] = useState({ title: "", content: "", isCompleted: false });
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
      alert('제목과 내용을 모두 입력해 주세요.')
      return
    }
    const newTodo = {
      title: todoState.title,
      content: todoState.content
    };
    dispatch(todosAction.addTodo(newTodo));
    setTodoState({
      title: '',
      content: '',
    })
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>제목</label>
        <input type="text" onChange={changeTitleHandler} value={todoState.title}/>
        <label>내용</label>
        <input type="textarea" onChange={changeContentHandler} value={todoState.content} />
        <button>제출</button>
      </form>
    </div>
  );
};

export default TodoForm;
