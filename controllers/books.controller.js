"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const model = require("../models/books.model");

function getAll(req, res, next) {
  let book = model.getAll();
  try {

    res.render("books", { book: book, title: 'All Books' });

  } catch (err) {
    console.error("Error while getting books ", err.message);
    next(err);
  }
}

function getAllByGenre(req, res, next) {
  let genre = req.params.genre;
  let book = model.getAllByGenre(genre);
  try {
    res.render("books", { book: book, title: '' + genre + ' Books' });

  } catch (err) {
    console.error("Error while getting books ", err.message);
    next(err);
  }
}

function getOneById(req, res, next) {
  let id = req.params.id;
  try {
    let sbook = model.getOneById(id);
    res.render("item-details", { sbook: sbook, title: 'Book #' + id });
    
  } catch (err) {
    console.error("Error while getting books ", err.message);
    next(err);
  }
}


function createNew(req, res, next) {
  let id = parseInt(req.body.id);
  let name = req.body.name;
  let author = req.body.author;
  let genre = req.body.genre;
  let rating = parseFloat(req.body.rating);
  let time = parseFloat(req.body.time);
  if (id && name && author && genre && rating && time) {
    let params = [id, name, author, genre, rating, time];
    try {
      model.createNew(params);
      res.render("books", { book: model.getAll(), title: 'All Books' });
    } catch (err) {
      console.error("Error while creating books ", err.message);
      next(err);
    }
  }
}

function update(req, res, next) {
  let id = parseInt(req.body.id);
  let name = req.body.name;
  let author = req.body.author;
  let genre = req.body.genre;
  let rating = parseFloat(req.body.rating);
  let time = parseFloat(req.body.time);
  if (id && name && author && genre && rating && time) {
    let params = [name, author, genre, rating, time, id];
    try {
      model.update(params);
      res.render("books", { book: model.getAll(), title: 'All Books' });
    } catch (err) {
      console.error("Error while creating books ", err.message);
      next(err);
    }
  }
}

function deleteById(req, res, next) {
    let id = req.params.id;
    try {
      model.deleteById(id);
      res.render("books", { book: model.getAll(), title: 'Book #' + id });
    } catch (err) {
      console.error("Error while getting books ", err.message);
      next(err);
    }
  }
  
  module.exports = {
    getAll,
    getAllByGenre,
    getOneById,
    createNew,
    deleteById,
    update,
  };