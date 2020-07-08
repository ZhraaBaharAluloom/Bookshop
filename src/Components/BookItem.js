import React from "react";
import { BookWrapper } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
import { Link } from "react-router-dom";

const BookItem = ({ book, deleteBook }) => {
  return (
    <BookWrapper>
      <Link to={`/books/${book.id}`}>
        <img alt={book.name} src={book.image} />
      </Link>
      <p>{book.name}</p>
      <p className="colors">{book.price} $</p>
      <DeleteButton bookId={book.id} deleteBook={deleteBook} />
    </BookWrapper>
  );
};
export default BookItem;
