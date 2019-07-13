# bookshelfAPI
Description TO_DO

## Libraries
* [express](https://www.npmjs.com/package/express)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [body-parser](https://www.npmjs.com/package/body-parser) //https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

## Development server

Run `npm run start:server` for a dev server. The app will automatically reload if you change any of the source files.

## APP set up

1. init package.json - in new project folder run `npm init`
2. install libraries: express, nodemon, body-parser
3. modify package.json file - put in `package.json` file `"start:server": "nodemon server.js"`
4. add gitignore file (copy one from project)
5. add server.js file (copy one from project)
6. in `./src/app` folder - add new file `app.js`

```javascript
const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
 
// CORS configuration https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    next();
})
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
module.exports = app;
```

7. run server `npm run start:server`
The message "[nodemon] starting `node server.js`" should show up

## first API

1. in `./src/app/routes` folder - add new route `books.js`

- init array of books
- add some initial data (simulate connection to DB)
- add methods to add book, delete book and to get all the books

```javascript
const express = require("express");
const router = express.Router();

// initial data
const books = [
  { id: 123, title: "title", description: "content", bookshelfNo: "1a" },
  { id: 124, title: "title2", description: "content2", bookshelfNo: "1a" }
];

// log request time
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// remove book
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  const index = books.findIndex(book => book.id == "123");

  const updatedBooks = [
    ...books.slice(0, index),
    ...books.slice(index + 1)
  ];

  console.log(updatedBooks);

  res.status(201).json({ message: "Book deleted successfully" });
});

// add new book
router.post("/newBook", (req, res, next) => {
  const book = req.body;
  book.id = "acb";

  books.push(book);
  console.log(books);
  res.status(201).json({ message: "Book added successfully" });
});

// get all books
router.get("", (req, res, next) => {
  res.status(200).json({
    message: "Books send",
    books: books
  });
});

module.exports = router;
```

2. in app.js add routes and api

```javascript
const express = require('express');
const bodyParser = require('body-parser');

const booksRoutes = require('./routes/books');
const URL_API_BOOKS = '/api/books';
 
const app = express();
 
// CORS configuration https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    next();
})
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(URL_API_BOOKS, booksRoutes);
 
module.exports = app;
```

3. check if api works
to get all books `http://localhost:3000/api/books`
to add new book you can use [https://www.getpostman.com/](postman tool) 