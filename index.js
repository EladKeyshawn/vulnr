#!/usr/bin/env node
const assert = require('chai').assert;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require("./config.json").server;
const db = require('./db');


const PORT = process.env.PORT || config.PORT;

app.use(bodyParser.json());
app.use(cors());


app.get('/hello', (req, res) => {

  db.query("SELECT * FROM users").then(result => {
      res.send("Hello world!");
  });


});


app.listen( PORT , () => console.log("listening on port", PORT ));
