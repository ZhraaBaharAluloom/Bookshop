import React from "react";
import { DeleteButtonStyled } from "../../styles";
import bookStore from "../../stores/bookStore";

const DeleteButton = (props) => {
  const handleDelete = () => {
    bookStore.deleteBook(props.bookId);
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
