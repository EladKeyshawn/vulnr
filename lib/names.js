const db = require('../db/index');
const _ = require('lodash');

module.exports = {
    add: async ({name}) => {
       await db.query(`INSERT INTO names values (${name})`);
    },
    show: async () => {
        const usersMatch = await db.query(`SELECT * FROM names`);
        console.log(usersMatch);

        if(usersMatch) {
          return usersMatch;
        }        
    }
};
