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

  deleteBook = (bookId) => {
    this.books = this.books.filter((book) => book.id !== +bookId);
  };
}

decorate(BookStore, {
  books: observable,
});

const bookStore = new BookStore();

export default bookStore;
