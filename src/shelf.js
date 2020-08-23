function shelfBook(bookObj, shelf) {
  shelf.unshift(bookObj);
  if (shelf.length > 3) {
    shelf.shift();
  }
}

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelfGenre) {
  var titleArray = []
  for (var i = 0; i < shelfGenre.length; i++) {
    titleArray.push(shelfGenre[i].title)
  }
  return titleArray.join(", ");
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(title)) {
      return true;
    } else {
    }
  }
  return false;
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
