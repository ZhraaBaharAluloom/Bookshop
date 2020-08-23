import React, { useState } from "react";
import Modal from "react-modal";

//stores
import vendorStore from "../../stores/vendorStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const VendorModal = ({ isOpen, closeModal, oldVendor }) => {
  const [vendor, setVendor] = useState(
    oldVendor
      ? {
          name: oldVendor.name,
          image: oldVendor.image,
          id: oldVendor.id,
          userId: oldVendor.userId,
          slug: oldVendor.slug,
        }
      : {
          name: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setVendor({ ...vendor, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setVendor({ ...vendor, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    vendorStore[oldVendor ? "updateVendor" : "createVendor"](vendor);
    closeModal();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <h1> {oldVendor ? "Update Shop" : "Create New Shop"}</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-6">
                <label>Name</label>
                <input
                  required
                  onChange={handleChange}
                  name="name"
                  value={vendor.name}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group ">
              <label>Image</label>
              <input
                onChange={handleImage}
                name="image"
                type="file"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {oldVendor ? "Update" : "Create"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default VendorModal;
