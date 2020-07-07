import React from "react";
import { BookWrapper } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";

const BookItem = (props) => {
  const book = props.book;
  return (
    <BookWrapper>
      <img
        onClick={() => props.selectBook(book.id)}
        alt={book.name}
        src={book.image}
      />
      <p>{book.name}</p>
      <p className="colors">{book.price} $</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </BookWrapper>
  );
};
export default BookItem;
