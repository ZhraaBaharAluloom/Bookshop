import React from "react";
import BooksList from "./Components/BooksList";
import styled, { ThemeProvider } from "styled-components";
import { Title, List, Description, Book, GlobalStyle } from "./styles";

const theme = {
  mainColor: "#363636",
  backgroundColor: "#faeee7",
  lightBrown: " #cf7500",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Title>Welcome to the books world</Title>
      <Description>Here you will get some amazing books</Description>
      <BooksList />
    </ThemeProvider>
  );
}

export default App;
