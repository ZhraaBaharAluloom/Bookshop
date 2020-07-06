import React, { useState } from "react";
import BooksList from "./Components/BooksList";
import { ThemeProvider } from "styled-components";
import { Title, Description, ThemeButton, GlobalStyle } from "./styles";
import BookDetails from "./Components/BookDetails";
import books from "./books";

const theme = {
  light: {
    mainColor: "#363636",
    backgroundColor: "#faeee7",
    lightBrown: " #cf7500",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#faeee7",
    backgroundColor: "#363636",
    lightBrown: " #cf7500",
    red: "#ff3232",
  },
};
// const [counter, setCounter] = useState(0);
// const handleIncrement = () => setCounter(counter + 1);

function App() {
  const [book, setBook] = useState(null);
  const [_books, setBooks] = useState(books);

  const deleteBook = (bookId) => {
    const updatedBooks = _books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    setBook(null);
  };

  const selectBook = (bookId) => {
    const SelectedBook = _books.find((book) => book.id === bookId);
    setBook(SelectedBook);
  };
  const setView = () =>
    book ? (
      <BookDetails book={book} deleteBook={deleteBook} />
    ) : (
      <BooksList
        selectBook={selectBook}
        books={_books}
        deleteBook={deleteBook}
      />
    );

  let [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      {/* <button onClick={handleIncrement}>Increment</button>
      {counter} */}
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark Mode" : "Light Mode"}
      </ThemeButton>
      <Title>Welcome to the books world</Title>
      <Description>Here you will get some amazing books</Description>
      {setView()}
    </ThemeProvider>
  );
}

export default App;
