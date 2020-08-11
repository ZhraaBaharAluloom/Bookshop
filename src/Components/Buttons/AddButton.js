import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import BookModal from "../modals/BookModal";
import VendorModal from "../modals/VendorModal";


const AddButton = ({ vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <TiPlus className="float-right" size="20" onClick={openModal} />
      {vendor ? (
        <BookModal
          vendor={vendor}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      ) : (
        <VendorModal isOpen={isOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AddButton;
