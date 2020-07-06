import React from "react";
import { ListWrapper } from "../styles";
import BookItem from "./BookItem";

const BooksList = (props) => {
  const booksList = props.books.map((book) => (
    <BookItem
      book={book}
      deleteBook={props.deleteBook}
      selectBook={props.selectBook}
      key={book.id}
    />
  ));

  return <ListWrapper>{booksList}</ListWrapper>;
};
export default BooksList;
