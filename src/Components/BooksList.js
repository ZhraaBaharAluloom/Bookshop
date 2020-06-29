import React from "react";
import styles from "../styles";
import books from "../books";
import BookItem from "./BookItem";

const BooksList = () => {
const booksList = books.map ((book)=> <BookItem book={book} key={book.id}/>)
   
   return    <div style={styles.list}>{booksList}</div>


}
export default BooksList;