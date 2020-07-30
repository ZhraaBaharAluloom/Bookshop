import React, { useState } from "react";
import Modal from "react-modal";

//stores
import bookStore from "../../stores/bookStore";

const BookModal = ({ vendorId, isOpen, closeModal, oldBook }) => {
  const [book, setBook] = useState(
    oldBook ?? {
      vendorId,
      name: "",
      price: 2,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleImage = (event) =>
    setBook({ ...book, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    bookStore[oldBook ? "updateBook" : "createBook"](book);
    closeModal();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h1>New Book</h1>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-6">
                <label>Name</label>
                <input
                  required
                  onChange={handleChange}
                  name="name"
                  value={book.name}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-6">
                <label>Price</label>
                <input
                  onChange={handleChange}
                  name="price"
                  value={book.price}
                  type="number"
                  min="2"
                  className="form-control"
                />
              </div>

              <div className="form-group col-6">
                <label>Author</label>
                <input
                  required
                  onChange={handleChange}
                  name="author"
                  value={book.author}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group col-6">
                <label>Genre</label>
                <input
                  required
                  onChange={handleChange}
                  name="genre"
                  value={book.genre}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group ">
              <label for="inputAddress">Description</label>
              <input
                onChange={handleChange}
                name="description"
                value={book.description}
                type="text"
                className="form-control"
                placeholder="Descibe Your Book"
              />
            </div>
            <div className="form-group ">
              <label>Image</label>
              <input
                required
                onChange={handleImage}
                name="image"
                type="file"
                className="form-control"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-6">
                <label>Released</label>
                <input
                  required
                  onChange={handleChange}
                  name="released"
                  value={book.released}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group col-6">
                <label>Delivery</label>
                <input
                  required
                  onChange={handleChange}
                  name="delivery"
                  value={book.delivery}
                  placeholder="Available/ NOT  Available"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              {oldBook ? "Update" : "Create"}
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default BookModal;
