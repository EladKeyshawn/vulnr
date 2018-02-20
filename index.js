#!/usr/bin/env node
const assert = require('chai').assert;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require("./config.json").server;

app.use(bodyParser.json());
app.use(cors());


app.get('/hello', (req, res) => {

  res.send("Hello world!");

});


app.listen(process.env.PORT || config.PORT , () => console.log("listening on port", PORT));
