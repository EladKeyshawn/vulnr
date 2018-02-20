#!/usr/bin/env node
const assert = require('chai').assert;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require("./config.json").server;
const db = require('./db');
// const auth = require('./auth');

const PORT = process.env.PORT || config.PORT;

app.use(bodyParser.json());
app.use(cors());

let Stack = [];

const IpMonitor = {
    "::ffff:10.100.102.6": {
        count: 0,
        expiry: "234235435345"
    }
};

setInterval(()=> {
    Stack = [];
    console.log(Stack.length);
},900);


app.use('/',(req,res) => {
    Stack.push("1");
    if(Stack.length > 1000) {
        res.send("Congrats");
        Stack = [];
    }

    console.log(Stack.length);
    res.end();
});

app.get('/hello', (req, res) => {

    db.query("SELECT * FROM users").then(result => {
        res.send("Hello world!");
    });



});


// app.post('/signup', (req, res) => {
//     console.log(req.body);
//     auth.signup(req.body)
//       .then((response) => {
//         res.json(response);
//       })
// });
//
// app.post('/login', (req, res) => {
//
//     console.log(req.body);
//     auth.login(req.body)
//       .then((response) => {
//         res.json(response);
//       })
// });

app.listen(PORT, () => console.log("listening on port", PORT));
