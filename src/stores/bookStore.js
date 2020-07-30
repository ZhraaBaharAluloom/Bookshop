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
    console.log("BookStore -> createBook -> newBook", newBook);
    try {
      const formData = new FormData();
      for (const key in newBook) formData.append(key, newBook[key]);
      const res = await axios.post(
        `http://localhost:8000/vendors/${newBook.vendorId}/books`,
        formData
      );
      this.books.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateBook = async (updatedBook) => {
    try {
      const formData = new FormData();
      for (const key in updatedBook) formData.append(key, updatedBook[key]);
      await axios.put(
        `http://localhost:8000/books/${updatedBook.id}`,
        formData
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
