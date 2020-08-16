import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const UsernameStyled = styled.p`
  padding: 0.25em 2em;
  font-size: 20px;
`;

// Books Style

export const ThemeButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const HomeTitle = styled.h1`
  margin-top: 300px;
  text-align: center;
  color: ${(props) => props.theme.brown};
`;

export const HomeDescription = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.brown};
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const BookWrapper = styled.div`
  padding: 10px;
  border: 3px solid ${(props) => props.theme.lightGrey};
  border-radius: 5px;
  margin: 5px;
  width: 300px;

  img {
    width: 250px;
    height: 300px;
    padding: 5px;
    margin: auto;
    display: flex;
  }

  p {
    text-align: center;
    font-size: 25px;
    &.colors {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  background: linear-gradient(rgba(234, 224, 213, 0.4), rgba(94, 80, 63, 0.7));
  height: auto;
  background-attachment: fixed;
  
  // background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
}
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const UpdateButtonStyle = styled.p`
  color: ${(props) => props.theme.grey};
`;

export const DetailWrapper = styled.div`
  border: 1px solid;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 500px;
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
  padding: 7px;

  &.active {
    color: ${(props) => props.theme.lightGrey};
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 350px;
`;

export const NavLogo = styled.img`
  width: 100px;
  height: 50px;
  &.pic {
    width: 200px;
  }
`;

//Vendor Style

export const Title = styled.h1`
  text-align: center;
  padding: 20px;
  color: ${(props) => props.theme.brown};
`;

export const SignupStyle = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const VendorWrapper = styled.div`
  border: 3px solid ${(props) => props.theme.lightGrey};
  border-radius: 5px;
  margin: 5px;
  width: 500;

  img {
    width: 400px;
    height: 300px;
    margin: auto;
    display: flex;
  }

  p {
    text-align: center;
    font-size: 25px;

    &.colors {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

export const VendorDetailWrapper = styled.div`
  border: ;
  display: block;
  margin: 50px auto 30px;
  width: 500px;

  img {
    width: 500px;
    height: 300px;
    display: block;
    margin: auto;
  }

  p {
    vertical-align: middle;
    text-align: center;
    margin: 10px;
  }
`;
