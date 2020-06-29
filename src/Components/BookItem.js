import React from "react";
 import styles from "../styles";

const BookItem = (props) => {
  return (
    <div style={styles.book} >
      <img style={styles.bookImage} alt={props.book.name} src={props.book.image} />
      <p style={styles.text}>{props.book.name}</p>
      <p style={styles.text}>{props.book.price} $</p>
    </div>
  );
};
export default BookItem;
