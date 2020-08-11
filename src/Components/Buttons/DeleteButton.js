import React from "react";
import { useHistory } from "react-router";

//style
import { DeleteButtonStyled } from "../../styles";

//stores
import bookStore from "../../stores/bookStore";
import vendorStore from "../../stores/vendorStore";

const DeleteButton = ({ bookId, vendorId }) => {
  const handleDelete = () => {
    if (vendorId) {
      vendorStore.deleteVendor(vendorId);
    } else {
      bookStore.deleteBook(bookId);
    }
  };

  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
