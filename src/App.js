import React, { useState } from "react";
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import BookDetail from "./Components/BookDetail";
import books from "./books";
import HomePage from "./Components/Home";
import { Switch, Route } from "react-router";
import NavBar from "./Components/NavBar";
import logo from "./logo1.jpg";

const theme = {
  light: {
    mainColor: "#363636",
    backgroundColor: "#f7f7ee",
    lightGrey: " #979797",
    red: "#ff3232",
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
{
  /* <button onClick={handleIncrement}>Increment</button>
{counter} */
}

function App() {
  let [currentTheme, setCurrentTheme] = useState("light");
  const [_books, setBooks] = useState(books);

  const deleteBook = (bookId) => {
    const updatedBooks = _books.filter((book) => book.id !== +bookId);
    setBooks(updatedBooks);
  };

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
        <Route path="/books/:bookId">
          <BookDetail books={_books} deleteBook={deleteBook} />
        </Route>
        <Route path="/books">
          <BooksList books={_books} deleteBook={deleteBook} />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
