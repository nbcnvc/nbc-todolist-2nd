import { styled } from "styled-components";

const HeaderWrapper = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  padding: 0 10px;
  margin: 20px 0;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <span>Todo list v2</span>
      <span>by React</span>
    </HeaderWrapper>
  )
}

export default Header;
