import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const HomeImage = styled.img`
  width: 500px;
  height: 330px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 3px;
`;

export const Description = styled.h3`
  text-align: center;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const BookWrapper = styled.div`
  padding: 20px;
  img {
    width: 300px;
    height: 400px;
    border: 2px solid ${(props) => props.theme.mainColor};
    margin: auto;
  }
  p {
    text-align: center;
    font-size: 25px;
    &.colors {
      color: ${(props) => props.theme.lightGrey};
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
body{
background-color: ${(props) => props.theme.backgroundColor};
color: ${(props) => props.theme.mainColor};
}
`;

export const DeleteButtonStyled = styled.p`
  color: #ff3232;
`;

export const DetailWrapper = styled.div`
  border: 1px solid;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  h1 {
    text-align: center;
  }
  img {
    width: 300px;
    height: 330px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    vertical-align: middle;
    text-align: justify;
    margin: 10px;
    &.textalign {
      text-align: center;
    }
  }
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  font-size: 20px;

  &.active {
    color: ${(props) => props.theme.lightGrey};
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
