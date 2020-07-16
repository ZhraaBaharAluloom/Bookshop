import React, { useState } from "react";
import { Switch, Route } from "react-router";
import logo from "./logo4.webp";

//Components
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import BookDetail from "./Components/BookDetail";
import HomePage from "./Components/Home";
import NavBar from "./Components/NavBar";

//styles
import { GlobalStyle } from "./styles";

const theme = {
  light: {
    mainColor: "#363636",
    backgroundColor: "#f7f7ee",
    lightGrey: " #6d6875",
    grey: "#424b54",
    red: "#6a040f",
    brown: "#463f3a",
  },
  dark: {
    mainColor: "#faeee7",
    backgroundColor: "#363636",
    lightGrey: " #979797",
    red: "#ff3232",
  },
};

function App() {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />

      <NavBar
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
        logo={logo}
      />

      <Switch>
        <Route path="/books/:bookSlug">
          <BookDetail />
        </Route>
        <Route path="/books">
          <BooksList />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
