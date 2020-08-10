import React, { useState } from "react";
import { observer } from "mobx-react";

//style
import { ListWrapper } from "../styles";

//book item
import BookItem from "./BookItem";

//search bar
import SearchBar from "./SearchBar";

const BookList = ({ books}) => {
  const [query, setQuery] = useState("");
  const booksList = books
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{booksList}</ListWrapper>
    </div>
  );
};
export default observer(BookList);
