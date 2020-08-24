#### Notes to ask during review:
  - Is it better to declare a variable inside of a function and return the variable, or to just return the obj/array/etc that the function is declaring?
    - Example: in book.js buildMainCharacter() ... would it be better to declare a variable that is assigned to the object and then return the variable? Library.js createLibrary() is done this way.

  - Are several for loops or nested for loops better? I have a feeling a nested is. I'm thinking mainly of checkoutBook() in Library.js.

    - I have made several attempts to refactor checkoutBook(). I am saving my attempts below, as I am meeting with my mentor early Monday morning and am planning go over it with him. I won't have it ready at the turn-in time for this project, but I have been enjoying trying to work through this. I want to try to learn more about for in and forEach. I used Object.keys and figured out how to use it to access objects within arrays (within an object!), and it was rather fun! I know the code below looks like a mess, but I have several questions about the different attempts I made. If I have the energy after I put my son to bed, I will clean this up a little bit.

```
    // come back to checkoutBook and refactor to make simpler and
    // more dynamic.
    // look up forIn and forEach and Object.keys??

    console.log(libraryLocation.shelves.fantasy[0].title);
    var shelfGenre = Object.keys(libraryLocation.shelves);
    console.log(libraryLocation.shelves[shelfGenre[0]]);

    for (var i = 0; i < shelfGenre.length; i++) {
      console.log(libraryLocation.shelves[shelfGenre[i]].title);
// I am not sure why .title is not accessing the title here???

      if (bookTitle == libraryLocation.shelves[shelfGenre[i]].title) {
              libraryLocation.shelves[shelfGenre[i]].pop();
              console.log(libraryLocation.shelves[shelfGenre[1]]);
              return `You have now checked out ${bookTitle} from the ${libraryLocation.name}`;
          }

      console.log(genre);
      for (var j = 0; j < genre.length; j++) {
        var genreTitle = genre[1].title
        console.log(genreTitle);
      }
    }

    console.log(shelfGenre);
    for (var i = 0; i < shelfGenre.length; i++) {
      shelfGenre[i].push(bookTitle);
      console.log(shelfGenre);
      // for (var j = 0; j < genreTitle.length; j++) {
      //   var genreTitle[j]
      // }
    }
```
