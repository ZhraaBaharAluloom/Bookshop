import React from "react";

//styles
import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="Search for book name"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
