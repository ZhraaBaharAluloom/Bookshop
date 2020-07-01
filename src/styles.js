import styled, { createGlobalStyle } from "styled-components";

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.h1`
  text-align: center;
`;
const Description = styled.h3`
  text-align: center;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const BookWrapper = styled.div`
  margin: 20px;
  img {
    width: 400px;
    height: 400px;
  }
  p {
    text-align: center;
    &.colors {
      color: ${(props) => props.theme.lightBrown};
    }
  }
`;
const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.mainColor};
}
`;
const DeleteButtonStyled = styled.p`
  color: #ff3232;
`;
export {
  Title,
  ListWrapper,
  Description,
  BookWrapper,
  GlobalStyle,
  ThemeButton,
  DeleteButtonStyled,
};
