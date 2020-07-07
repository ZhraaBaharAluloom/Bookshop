import React from "react";
import DeleteButton from "../Components/Buttons/DeleteButton";
const BookDetail = (props) => {
  const book = props.book;
  return (
    <div>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p>{book.price} $</p>
      <p>{book.description}</p>
      <DeleteButton bookId={book.id} deleteBook={props.deleteBook} />
    </div>
  );
};
export default BookDetail;
