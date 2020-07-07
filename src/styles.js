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

const DetailWrapper = styled.div`
  border: 1px solid;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

  img {
    width: 200px;
    height: 330px;
    float: left;
    padding: 10px;
    display: inline-block;
  }

  p {
    vertical-align: middle;
    text-align: justify;
    margin: 10px;
  }
`;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export {
  Title,
  ListWrapper,
  Description,
  BookWrapper,
  GlobalStyle,
  ThemeButton,
  DetailWrapper,
  DeleteButtonStyled,
  SearchBarStyled,
};
