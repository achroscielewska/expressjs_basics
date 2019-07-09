const express = require("express");
const router = express.Router();

// initial data
const books = [
    {id: 'acb1', title: 'title', description: 'content', bookshelfNo: '1a' },
    {id: 'acb2', title: 'title2', description: 'content2', bookshelfNo: '1a'},
]

const index = 2;

// add new book
router.post('/newBook', (req, res, next) => {
    const book = req.body;
    book.id = 'acb';

    books.push(book)
    console.log(books);
    res.status(201).json({ message: 'Book added successfully' })
})

// get all books
router.get('',(req, res, next) => {
    res.status(200).json({
        message: 'Books send',
        books: books
    });
})

module.exports = router;