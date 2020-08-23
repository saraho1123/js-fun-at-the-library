function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(reviewText, review) {
  if (!review.includes(reviewText)) {
    review.push(reviewText);
  }
}

function calculatePageCount(theBookTitle) {
  return theBookTitle.length * 20;
}

function writeBook(bookTitle, maincharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: maincharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle),
  }
}

function editBook(originalBook) {
  originalBook.pageCount = originalBook.pageCount * .75;
  return originalBook;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
