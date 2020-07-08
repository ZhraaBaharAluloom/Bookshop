import React, { useState } from "react";
import { ListWrapper } from "../styles";
import BookItem from "./BookItem";
import books from "../books";
import SearchBar from "./SearchBar";

const BooksList = ({ books, deleteBook }) => {
  const [query, setQuery] = useState("");
  const booksList = books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => (
      <BookItem book={book} deleteBook={deleteBook} key={book.id} />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">{booksList}</ListWrapper>
    </div>
  );
};
export default BooksList;
