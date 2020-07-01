import React from "react";
import { BookWrapper, DeleteButtonStyled } from "../styles";
import book from "../books";

const BookItem = (props) => {
  const handleDelete = () => {
    props.deleteBook(props.book.id);
  };
  return (
    <BookWrapper>
      <img alt={props.book.name} src={props.book.image} />
      <p>{props.book.name}</p>
      <p className="colors">{props.book.price} $</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </BookWrapper>
  );
};
export default BookItem;
