import { styled } from "styled-components";

const Label = styled.label`
  margin-right: 5px;
`

const Input = styled.input`
  border-radius: 5px;
  margin-right: 10px;
`;

const TodoInput = (props) => {
  const { labelStr, idStr, changeHandler, inputValue } = props;

  return (
    <>
      <Label htmlFor={idStr}>{labelStr}</Label>
      <Input id={idStr} onChange={changeHandler} value={inputValue} />
    </>
  );
};

export default TodoInput;
