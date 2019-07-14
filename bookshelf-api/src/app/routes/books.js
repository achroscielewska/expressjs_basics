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
