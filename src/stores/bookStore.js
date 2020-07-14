import books from "../books";
import { decorate, observable } from "mobx";
import slugify from "react-slugify";

class BookStore {
  books = books;
  createBook = (newBook) => {
    newBook.id = this.books[books.length - 1].id + 1;
    newBook.slug = slugify(newBook.name);
    this.books.push(newBook);
  };

  updateBook = (updatedBook) => {
    const book = this.books.find((book) => book.id === updatedBook.id);
    for (const key in book) book[key] = updatedBook[key];
    console.log("updateBook -> book", book);
  };

  deleteBook = (bookId) => {
    this.books = this.books.filter((book) => book.id !== +bookId);
  };
}

decorate(BookStore, {
  books: observable,
});

const bookStore = new BookStore();

export default bookStore;
