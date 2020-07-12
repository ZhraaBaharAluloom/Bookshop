import React, { useState } from "react";
import Modal from "react-modal";

const BookModal = ({ isOpen, closeModal, createBook }) => {
  const [book, setBook] = useState({
    name: "",
    price: 2,
    description: "",
    image: "",
  });
  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(book);
    closeModal();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h1>New Book</h1>
        <div classNameName="container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-6">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  name="name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-6">
                <label>Price</label>
                <input
                  onChange={handleChange}
                  name="price"
                  type="number"
                  min="2"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group ">
              <label for="inputAddress">Description</label>
              <input
                onChange={handleChange}
                name="description"
                type="text"
                className="form-control"
                placeholder="Descibe Your Book"
              />
            </div>
            <div className="form-group ">
              <label>Image</label>
              <input
                onChange={handleChange}
                name="image"
                type="text"
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BookModal;
