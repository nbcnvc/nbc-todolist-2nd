import { styled } from "styled-components";

const Input = styled.input`
  border-radius: 5px;
`;

const TodoInput = (props) => {
  const { labelStr, idStr, changeHandler, inputValue } = props;

  return (
    <>
      <label htmlFor={idStr}>{labelStr}</label>
      <Input id={idStr} onChange={changeHandler} value={inputValue} />
    </>
  );
};

export default TodoInput;
