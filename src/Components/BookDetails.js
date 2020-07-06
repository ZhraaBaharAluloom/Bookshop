import React from "react";
import { BookWrapper, DeleteButtonStyled, DetailWrapper } from "../styles";

const BookDetails = (props) => {
  const book = props.book;
  const handleDelete = () => {
    props.deleteBook(book.id);
  };
  return (
    <DetailWrapper>
      <img alt={book.name} src={book.image} />
      <p>{book.name}</p>
      <p>{book.price} $</p>
      <p>{book.description}</p>
      <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    </DetailWrapper>
  );
};

export default BookDetails;
