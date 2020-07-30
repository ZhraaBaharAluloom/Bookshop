import React, { useState } from "react";
import BookModal from "../modals/BookModal";
import { UpdateButtonStyle } from "../../styles";
import VendorModal from "../modals/VendorModal";

const UpdateButton = ({ book, vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyle onClick={() => openModal(true)}>
        Update
      </UpdateButtonStyle>
      {vendor ? (
        <VendorModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldVendor={vendor}
        />
      ) : (
        <BookModal isOpen={isOpen} closeModal={closeModal} oldBook={book} />
      )}
    </>
  );
};

export default UpdateButton;
