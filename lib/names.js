const db = require('../db/index');
const _ = require('lodash');

module.exports = {
    add: async (name) => {
        await db.query(`INSERT INTO names VALUES (name)`);
    },
    show: async () => {
        const usersMatch = await db.query(`SELECT * FROM names`);
        console.log(usersMatch);

        const response = {auth: false, extras: null};
        response.auth = true;
        response.extras =  _.map(usersMatch, user => {
            return _.omit(user,'pass');
        });
        return response;
    }
};
