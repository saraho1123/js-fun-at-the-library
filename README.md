# JS Fun in the Library

## Overview

In front end web development, the programming language you will encounter most
often is JavaScript. Soon, we'll also use HTML and CSS to help a user interact
with our applications, however before we do that, we need to understand how to
use JavaScript to handle the logic of our applications.

In this project, you'll be gaining experience working with variables, primitive
data types, looping, arrays, and objects. As you work through the
iterations, be sure to take time to stop and refactor you solutions. There is
rarely one right way to solve a problem in programming, and part of your job
will be evaluating the trade offs between different approaches to solving a
problem.

## Learning goals

  - Understand what JavaScript primitives are, and how/when to use them
  - Understand how to declare variables and assign data to them
  - Practice using objects and arrays

## Setup

  - Fork this project to your own Github account
  - clone the repository to your local machine
  - `cd` into the project
  - run `npm install` to install the necessary dependencies

## Iterations

### 0: Practice Variables, Primitives, Functions, Arrays, and Objects
  - In the `src/` directory, you'll find a file called 'warm-up.js'. Read
    through the instructions in the file carefully. The exercises in this file
    will help you to complete the rest of the iterations  

### 1: Complete the book tests
  - For the rest of the iterations, you will be working to build out some
    js functionality, using a test suite as your guide.  
  - Start with the `book.js` file.  
    - Unskip the first test in `test/book-test.js`  
    - Run `npm test test/book-test.js`  
    - Read the error messages CAREFULLY!  
    - Make the test pass.
  - Before moving on to the next iteration, take time to refactor your
    solutions. Is this the best approach to solving the problem? Is there a
    different way you could make the tests pass?  

### 2: Complete the shelf tests
  - Unskip the first test in `test/shelf-test.js`, and get to work passing the tests
  - Run `npm test test/shelf-test.js`  
  - Before moving on to the next iteration, take time to refactor your
    solutions. Is this the best approach to solving the problem? Is there a
    different way you could make the tests pass?  

### 3: Complete the library tests
  - Unskip the first test in `test/library-test.js`, and get to work passing the tests
  - Run `npm test test/library-test.js`  
  - Before moving on to the next iteration, take time to refactor your
    solutions. Is this the best approach to solving the problem? Is there a
    different way you could make the tests pass?  

### 4: Extension (not part of the project, just stuff to do if you get to it): Complete the Librarian tests
  - Unskip the first test in `test/Librarian-test.js`, and get to work passing the tests
  - Run `npm test test/Librarian-test.js`  
  - Take time to refactor your solutions. Is this the best approach to solving the problem?
    Is there a different way you could make the tests pass?  


#### Notes to ask during review:
  - Is it better to declare a variable inside of a function and return the variable, or to just return the obj/array/etc that the function is declaring?
    - Example: in book.js buildMainCharacter() ... would it be better to declare a variable that is assigned to the object and then return the variable? Library.js createLibrary() is done this way.

  - Are several for loops or nested for loops better? I have a feeling a nested is. I'm thinking mainly of checkoutBook() in Library.js. 
