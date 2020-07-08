import React from "react";
import DeleteButton from "../Components/Buttons/DeleteButton";
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";

const BookDetail = ({ books, deleteBook }) => {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === +bookId);
  if (!book) return <Redirect to="/books" />;
  return (
    <DetailWrapper>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p className="textalign">{book.price} $</p>
      <p>{book.description}</p>
      <DeleteButton bookId={book.id} deleteBook={deleteBook} />
    </DetailWrapper>
  );
};

export default BookDetail;
