import React from "react";
import { ListWrapper } from "../styles";
import books from "../books";
import BookItem from "./BookItem";

const BooksList = () => {
  const booksList = books.map((book) => <BookItem book={book} key={book.id} />);

  return <ListWrapper>{booksList}</ListWrapper>;
};
export default BooksList;
