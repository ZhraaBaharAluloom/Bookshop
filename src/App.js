import React, { useState } from "react";
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import BookDetail from "./Components/BookDetail";
import HomePage from "./Components/Home";
import { Switch, Route } from "react-router";
import NavBar from "./Components/NavBar";
import logo from "./logo4.webp";

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
// const [counter, setCounter] = useState(0);
// const handleIncrement = () => setCounter(counter + 1);
// {
//   /* <button onClick={handleIncrement}>Increment</button>
// {counter} */
// }

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
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
