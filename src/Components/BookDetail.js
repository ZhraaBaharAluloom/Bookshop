import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//buttons
import DeleteButton from "../Components/Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";

//style
import { DetailWrapper } from "../styles";

//stores
import bookStore from "../stores/bookStore";

const BookDetail = () => {
  const { bookSlug } = useParams();
  const book = bookStore.books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  return (
    <DetailWrapper>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p className="textalign">Price: {book.price} $</p>
      <p className="textalign">Author: {book.author}</p>
      <p className="textalign">Released: {book.released} </p>
      <p className="textalign">Genre: {book.genre}</p>
      <p>Summary: {book.description}</p>
      <p>Delivery: {book.delivery}</p>
      <UpdateButton book={book} />
      <DeleteButton bookId={book.id} />
    </DetailWrapper>
  );
};

export default observer(BookDetail);
