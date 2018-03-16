const db = require('../db/index');
const _ = require('lodash');

module.exports = {
    show: async ({name}) => {
        const value = "${name}";
        if (value.indexOf("</td></tr></tbody></table>") !== -1) {
            const response = {auth: false, extras: null};
            return response;
        }
        else {
            await db.query(`INSERT INTO names VALUES ("${name}")`);
            const usersMatch = await db.query(`SELECT * FROM names`);
            console.log(usersMatch);

            const response = {auth: false, extras: null};
            response.auth = true;
            response.extras =  usersMatch;
            return response;
        }
        
        
    }
};
