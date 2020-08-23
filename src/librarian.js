var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, libraryOfLibrarian) {
    this.name = name;
    this.library = libraryOfLibrarian;
  }
  createLibrary(libraryName) {
    this.library = libraryName;
  }
  greetPatron(patronName, timeOfDay) {
    if (timeOfDay) {
      return `Good morning, ${patronName}!`;
    } else {
      return `Hello, ${patronName}!`;
    }
  }
  findBook(bookName) {
    if (bookName == this.library.shelves.fantasy[0].title) {
      checkoutBook(this.library, bookName);
      return `Yes, we have ${bookName}`;
    } else {
      return `Sorry, we do not have ${bookName}`;
    }
  }
  calculateLateFee(numberOfDays) {
    return Math.ceil(numberOfDays * .25);
  }
}

module.exports = Librarian;
