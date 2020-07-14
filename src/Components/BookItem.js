import React from "react";
import { Link } from "react-router-dom";

import { observer } from "mobx-react";

//style
import { BookWrapper } from "../styles";

//buttons
import DeleteButton from "./Buttons/DeleteButton";
import UpdateButton from "./Buttons/UpdateButton";

const BookItem = ({ book }) => {
  return (
    <BookWrapper>
      <Link to={`/books/${book.slug}`}>
        <img alt={book.name} src={book.image} />
      </Link>
      <p>{book.name}</p>
      <p className="colors">{book.price} $</p>
      <UpdateButton book={book} />
      <DeleteButton bookId={book.id} />
    </BookWrapper>
  );
};
export default observer(BookItem);
