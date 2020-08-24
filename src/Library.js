function createLibrary(libraryName) {
  var libraryObj = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [] }
  }
  return libraryObj;
}

function addBook(library, book) {
  if (book.genre == 'fantasy') {
    return library.shelves.fantasy.push(book);
  }
  if (book.genre == 'fiction') {
    return library.shelves.fiction.push(book);
  }
  if (book.genre == 'nonFiction') {
    return library.shelves.nonFiction.push(book);
  }
}

function checkoutBook(libraryLocation, bookTitle) {
  for (var i = 0; i < libraryLocation.shelves.fantasy.length; i++) {
    if (bookTitle == libraryLocation.shelves.fantasy[i].title) {
        libraryLocation.shelves.fantasy.pop();
        return `You have now checked out ${bookTitle} from the ${libraryLocation.name}`;
    }
  }
  for (var i = 0; i < libraryLocation.shelves.fiction.length; i++) {
    if (bookTitle == libraryLocation.shelves.fiction[i].title) {
        libraryLocation.shelves.fiction.pop();
        return `You have now checked out ${bookTitle} from the ${libraryLocation.name}`;
    }
  }
  for (var i = 0; i < libraryLocation.shelves.nonFiction.length; i++) {
    if (bookTitle == libraryLocation.shelves.nonFiction[i].title) {
        libraryLocation.shelves.nonFiction.pop();
        return `You have now checked out ${bookTitle} from the ${libraryLocation.name}`;
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryLocation.name}`;
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
