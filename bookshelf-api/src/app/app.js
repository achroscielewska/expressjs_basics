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