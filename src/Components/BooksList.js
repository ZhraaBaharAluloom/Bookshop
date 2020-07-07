import React, { useState } from "react";
import { ListWrapper } from "../styles";
import BookItem from "./BookItem";
import books from "../books";
import SearchBar from "./SearchBar";

const BooksList = (props) => {
  const [query, setQuery] = useState("");
  const filteredBooks = props._books.filter((book) =>
    book.name.toLowerCase().includes(query.toLowerCase())
  );

  const booksList = filteredBooks.map((book) => (
    <BookItem
      book={book}
      deleteBook={props.deleteBook}
      selectBook={props.selectBook}
      key={book.id}
    />
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{booksList}</ListWrapper>
    </div>
  );
};
export default BooksList;
