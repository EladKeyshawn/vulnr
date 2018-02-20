#!/usr/bin/env node
const assert = require('chai').assert;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require("./config.json").server;
const db = require('./db');
// const auth = require('./auth');
const _ = require('lodash');
const PORT = process.env.PORT || config.PORT;

app.use(bodyParser.json());
app.use(cors());

let Stack = [];

const IpMonitor = {
    "::ffff:10.100.102.6": {
        count: 0,
    }
};


let count = 0;


setInterval(() => {
    console.log(IpMonitor);
    _.map(IpMonitor, (value,key) => {
        IpMonitor[key].count = 0;
    });

    console.log(IpMonitor);


}, 1500);


app.post('/ddos', (req, res) => {

    const ip = req.ip;


    if(IpMonitor[ip]) {
        IpMonitor[ip].count += 1;

        const attackers = _.filter(IpMonitor, (value,key) => value.count > 10);
        if( attackers.length > 1) {
            // TODO: Return Link to next level along with more nice congrats
            res.send("Congrats");
        }
    } else {
        IpMonitor[ip] = {count:0}
    }

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
