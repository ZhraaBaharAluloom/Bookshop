import React from "react";
import { BookWrapper } from "../styles";

const BookItem = (props) => {
  return (
    <BookWrapper>
      <img alt={props.book.name} src={props.book.image} />
      <p>{props.book.name}</p>
      <p className="colors">{props.book.price} $</p>
    </BookWrapper>
  );
};
export default BookItem;
