const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const keys = require("../../config/keys");

// get saved books from mongo
router.get("/books", (req, res) => {

});

// save a book to mongo
router.post("/books", (req, res) => {
  
});

// get a book from mongo by id
router.get("/books/:id", (req, res) => {
  
});

// get books from google books api
router.get("/google-books", (req, res) => {

});
