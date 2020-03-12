const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes /api/books
router.use("/books", bookRoutes);

module.exports = router;