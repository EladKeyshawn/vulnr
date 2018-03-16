const db = require('../db/index');
const _ = require('lodash');

module.exports = {
    show: async ({name}) => {
        let response = {auth: false, extras: null};

        if (name.includes("</td></tr></tbody></table>")) {
            response = {cracked: true, extras: "abc1234"};
            return response;
        }

        await db.query(`INSERT INTO names VALUES ("${name}")`);


        const usersMatch = await db.query(`SELECT * FROM names`);
        console.log(usersMatch);

        response.auth = true;
        response.extras =  usersMatch;
        return response;
    }
};
