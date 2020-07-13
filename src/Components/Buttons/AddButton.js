import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import BookModal from "../modals/BookModal";

const AddButton = ({ createBook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <TiPlus className="float-right" size="20" onClick={openModal} />
      <BookModal
        isOpen={isOpen}
        closeModal={closeModal}
        createBook={createBook}
      />
    </div>
  );
};

export default AddButton;
