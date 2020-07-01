import React, { useState } from "react";
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import { Title, Description, ThemeButton, GlobalStyle } from "./styles";

const theme = {
  light: {
    mainColor: "#363636",
    backgroundColor: "#faeee7",
    lightBrown: " #cf7500",
  },
  dark: {
    mainColor: "#faeee7",
    backgroundColor: "#363636",
    lightBrown: " #cf7500",
  },
};

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>Dark Mode</ThemeButton>
      <Title>Welcome to the books world</Title>
      <Description>Here you will get some amazing books</Description>
      <BooksList />
    </ThemeProvider>
  );
}

export default App;
