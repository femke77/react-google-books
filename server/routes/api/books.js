const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const axios = require("axios");
const keys = require("../../config/keys");

// Matches with "/api/books"
router.get("/google-results", (req, res) => {
  const apikey = keys.google.apiKey;
  axios.get("https://www.googleapis.com/books/v1/volumes", {params: {q: req.query, key: apikey}})
    .then(({ data: { items } }) => res.json(items))
    .catch(err => {
      res.status("500")
      console.log(err)
    })
});


module.exports = router;