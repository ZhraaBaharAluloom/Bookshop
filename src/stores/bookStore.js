import { decorate, observable } from "mobx";
import axios from "axios";

class BookStore {
  books = [];

  fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/books");
      this.books = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createBook = async (newBook) => {
    try {
      const res = await axios.post("http://localhost:8000/books", newBook);
      this.books.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateBook = async (updatedBook) => {
    try {
      await axios.put(
        `http://localhost:8000/books/${updatedBook.id}`,
        updatedBook
      );
    } catch (error) {
      console.log(error);
    }

    const book = this.books.find((book) => book.id === updatedBook.id);
    for (const key in book) book[key] = updatedBook[key];
  };

  deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`);
      this.books = this.books.filter((book) => book.id !== +bookId);
    } catch (error) {
      console.error(error);
    }
  };
}

decorate(BookStore, {
  books: observable,
});

const bookStore = new BookStore();
bookStore.fetchBooks();

export default bookStore;
