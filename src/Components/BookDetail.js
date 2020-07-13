import React from "react";
import DeleteButton from "../Components/Buttons/DeleteButton";
import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import bookStore from "../stores/bookStore";
import { observer } from "mobx-react";

const BookDetail = () => {
  const { bookSlug } = useParams();
  const book = bookStore.books.find((book) => book.slug === bookSlug);
  if (!book) return <Redirect to="/books" />;
  return (
    <DetailWrapper>
      <h1>{book.name}</h1>
      <img src={book.image} alt={book.name} />
      <p className="textalign">{book.price} $</p>
      <p>{book.description}</p>
      <DeleteButton bookId={book.id} />
    </DetailWrapper>
  );
};

export default observer(BookDetail);
