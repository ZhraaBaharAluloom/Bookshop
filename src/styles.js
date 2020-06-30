import styled, { createGlobalStyle } from "styled-components";

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
export { Title, ListWrapper, Description, BookWrapper, GlobalStyle };
