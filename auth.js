const db = require('./db');


module.exports = {
    signup: async ({email,password}) => {
       await db.query(`INSERT INTO users SET email="${email}", pass="${password}"`);
    },
    login: async ({email,password}) => {
        const usersMatch = await db.query(`SELECT * FROM users WHERE email="${email}" AND pass="${password}"`);
        if(usersMatch && usersMatch.length === 1) {
            return true;
        }

        return false;
    }
}