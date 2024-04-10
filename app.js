"use strict";
const express = require("express");
const app = express();
const path=require("path");

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const booksRouter = require("./routes/books.route");
app.use("/books", booksRouter);


app.get("/", (req, res) => {
  res.json({ message: "You are on the home page" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});