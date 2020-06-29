import React from "react";
import books from "./books";
import styles from "./styles";

function App() {
  const booksList = books.map((book) => ( 
    <div style={styles.book} key={book.id}>
      <img style={styles.bookImage} alt={book.name} src={book.image} />
      <p style={styles.text}>{book.name}</p>
      <p style={styles.text}>{book.price} $</p>
    </div>
  ));
  return (
<div>
    <div>
    <h1 style={styles.text}>Welcome to the books world</h1>
  <h3 style={styles.text}>Here you will get some amazing books</h3>
  </div>

  <div style={styles.list}>{booksList}</div>
  </div>
  );
}

export default App;
