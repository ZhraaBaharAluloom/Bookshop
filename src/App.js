import React from "react";
import styles from "./styles";
import BooksList from "./Components/BooksList";

function App() {
  
  return (
<div>
    <div>
    <h1 style={styles.text}>Welcome to the books world</h1>
  <h3 style={styles.text}>Here you will get some amazing books</h3>
  </div>
<BooksList />
  </div>
  );
}

export default App;
