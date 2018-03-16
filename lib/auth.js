const db = require('../db/index');
const _ = require('lodash');

module.exports = {
    signup: async ({email,password}) => {
       await db.query(`INSERT INTO users SET email="${email}", pass="${password}"`);
    },
    login: async ({email,password}) => {
        const usersMatch = await db.query(`SELECT * FROM users WHERE email="${email}" AND pass="${password}"`);
//         const usersMatch = await db.query(`SELECT * FROM names`);
        console.log(usersMatch);

        const response = {auth: false, extras: null};
        if(usersMatch && usersMatch.length > 0) {
           response.auth = true;
           response.extras =  _.map(usersMatch, user => {
               return _.omit(user,'pass');
           });
        }
        return response;
        // return !!(usersMatch && usersMatch.length === 1);
    }
};
