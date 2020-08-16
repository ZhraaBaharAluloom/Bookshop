import { decorate, observable } from "mobx";
import instance from "./instance";

class BookStore {
  books = [];

  fetchBooks = async () => {
    try {
      const response = await instance.get("/books");
      this.books = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  createBook = async (newBook, vendor) => {
    try {
      const formData = new FormData();
      for (const key in newBook) formData.append(key, newBook[key]);
      const res = await instance.post(`/vendors/${vendor.id}/books`, formData);
      this.books.push(res.data);
      vendor.books.push({ id: res.data.id });
    } catch (error) {
      console.log(error);
    }
  };

  getBookById = (bookId) => {
    return this.books.find((book) => book.id === bookId);
  };

  updateBook = async (updatedBook) => {
    try {
      // Update in the backend
      const formData = new FormData();
      for (const key in updatedBook) formData.append(key, updatedBook[key]);
      await instance.put(`/books/${updatedBook.id}`, formData);

      // Update in the frontend
      const book = this.books.find((book) => book.id === updatedBook.id);
      for (const key in updatedBook) book[key] = updatedBook[key];
      book.image = URL.createObjectURL(updatedBook.image);
    } catch (error) {
      console.log(error);
    }
  };

  deleteBook = async (bookId) => {
    try {
      await instance.delete(`/books/${bookId}`);
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
