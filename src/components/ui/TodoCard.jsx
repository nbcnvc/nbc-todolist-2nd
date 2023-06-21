import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  width: 502px;
  height: 402px;
  border-radius: 2px;
  padding: 15px;
`;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

const TodoCard = (props) => {
  const { id, title, content } = props.todo;
  return (
    <Container>
      <HeadContainer>
        <span>ID: {id}</span>
        <CustomLink to="/todos/">이전으로</CustomLink>
      </HeadContainer>
      <h2>{title}</h2>
      <p>{content}</p>
    </Container>
  );
};

export default TodoCard;
