"use strict";
const db = require("../models/db-connect");

function getAll() {
  let sql = "SELECT * FROM books;";
  const data = db.all(sql);
  return data;
};

function getAllByGenre(genre) {
  let sql = "SELECT * FROM books WHERE genre =? ORDER BY name;";
  const data = db.all(sql, genre);
  return data;
};

function getOneById(id) {
  let sql = "SELECT * FROM BOOKS WHERE id =? ;";
  const item = db.get(sql, id);
  return item;
};

function createNew(params) {
  let sql =
    'INSERT INTO books ("id","name","author","genre","rating","time") ' +
    "VALUES(?, ?, ?, ?, ?, ?);";
  const item = db.run(sql, params);
  return item;
};

function deleteById(id) {
  let sql = 'DELETE FROM BOOKS WHERE id =?';
  const response = db.run(sql, id);
  return response;
};

function update(params) {
  let sql = 'UPDATE books SET name =?,author =?,genre =?,rating =?,time =? WHERE id =?;';
  const response = db.run(sql, params);
  return response;
};



module.exports = {
  getAll,
  getAllByGenre,
  getOneById,
  createNew,
  deleteById,
  update,
};
