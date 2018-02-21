#!/usr/bin/env node
const assert = require('chai').assert;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require("./config.json").server;

const auth = require('./lib/auth');
const levels = require('./lib/levels');
const Ddos = require('./lib/ddos');

const ddos = new Ddos({silent:true,burst: 30, limit: 45,responseStatus:200,errormessage: "Congrats"});


const PORT = process.env.PORT || config.PORT;

app.use(bodyParser.json());
app.use(cors());


app.get('/hello', (req, res) => {
     res.send("Hello world!");
});

app.get('/level/validate', (req,res)=>{
    const level = req.query.level, solution = req.query.sol;
    assert.isOk(level, 'level # must be provided for validation');
    assert.isOk(solution,'solution must be provided for validation');

    res.json(levels.validate(level,solution));
});

app.post('/ddos',ddos.express);

app.post('/signup', (req, res) => {
    auth.signup(req.body)
      .then((response) => {
        res.json(response);
      })
});

app.post('/login', (req, res) => {
    auth.login(req.body)
      .then((response) => {
        res.json(response);
      })
});

app.listen(PORT, () => console.log("listening on port", PORT));
