import React, { useState } from "react";
import { ListWrapper } from "../styles";
import BookItem from "./BookItem";
import SearchBar from "./SearchBar";
import AddButton from "./Buttons/AddButton";
import bookStore from "../stores/bookStore";
import { observer } from "mobx-react";

const BooksList = ({ deleteBook }) => {
  const [query, setQuery] = useState("");
  const booksList = bookStore.books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <ListWrapper className="row">
        {booksList}
        <AddButton />
      </ListWrapper>
    </div>
  );
};
export default observer(BooksList);
