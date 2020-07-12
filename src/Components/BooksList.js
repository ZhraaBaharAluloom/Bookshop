import React, { useState } from "react";
import { ListWrapper } from "../styles";
import BookItem from "./BookItem";
import books from "../books";
import SearchBar from "./SearchBar";
import AddButton from "./Buttons/AddButton";
import { createGlobalStyle } from "styled-components";

const BooksList = ({ books, deleteBook, createBook }) => {
  const [query, setQuery] = useState("");
  const booksList = books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => (
      <BookItem book={book} deleteBook={deleteBook} key={book.id} />
    ));

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">
        {booksList}
        <AddButton createBook={createBook} />
      </ListWrapper>
    </div>
  );
};
export default BooksList;
