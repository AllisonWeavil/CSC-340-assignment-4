"use strict";
const express = require("express");
const router = express.Router();

const bookscontroller = require("../controllers/books.controller");

router.get("/all", bookscontroller.getAll);
router.get("/genre/:genre", bookscontroller.getAllByGenre);
router.get("/item/:id", bookscontroller.getOneById);
router.post("/new", bookscontroller.createNew);
router.delete("/delete/:id", bookscontroller.deleteById);
router.put("/update/:id", bookscontroller.update)

module.exports = router;