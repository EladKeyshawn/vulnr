const db = require('../db/index');
const _ = require('lodash');

module.exports = {
    show: async () => {
        const usersMatch = await db.query(`SELECT * FROM names`);
        console.log(usersMatch);

        const response = {auth: false, extras: null};
        response.auth = true;
        response.extras = usersMatch;
        return response;
    }
};
