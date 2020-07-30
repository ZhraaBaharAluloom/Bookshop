import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";
import BookModal from "../modals/BookModal";
import VendorModal from "../modals/VendorModal";

import Vendors from "../../stores/vendorStore";
import vendorStore from "../../stores/vendorStore";

const AddButton = ({ vendorId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <div>
      <TiPlus className="float-right" size="20" onClick={openModal} />
      {vendorId ? (
        <BookModal
          vendorId={vendorId}
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
