import { decorate, observable } from "mobx";
import slugify from "react-slugify";
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

  createBook = (newBook) => {
    // newBook.id = this.books[books.length - 1].id + 1;
    // newBook.slug = slugify(newBook.name);
    this.books.push(newBook);
  };

  updateBook = (updatedBook) => {
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
