import React, { useState } from "react";
import { ListWrapper } from "../styles";
import books from "../books";
import BookItem from "./BookItem";

const BooksList = () => {
  const [_books, setBooks] = useState(books);

  const deleteBook = (bookId) => {
    const updatedBooks = _books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
    console.log(bookId);
  };

  const booksList = _books.map((book) => (
    <BookItem book={book} deleteBook={deleteBook} key={book.id} />
  ));

  return <ListWrapper>{booksList}</ListWrapper>;
};
export default BooksList;
