import React, { useState } from "react";
import BookModal from "../modals/BookModal";
import { UpdateButtonStyle } from "../../styles";

const UpdateButton = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyle onClick={() => openModal(true)}>
        Update
      </UpdateButtonStyle>
      <BookModal isOpen={isOpen} closeModal={closeModal} oldBook={book} />
    </>
  );
};

export default UpdateButton;
