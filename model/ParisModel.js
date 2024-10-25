const db = require('../config/db');

const md = {
    save: (data, callback) => {
        const q = "INSERT INTO codeisart (lastname, firstname, email, gender) VALUES (?, ?, ?, ?)";
        db.query(q, [data.LastName, data.FirstName, data.email, data.gender], callback);
    },

    getAll: (callback) => {
        const q = "SELECT * FROM codeisart";
        db.query(q, callback);
    }
};

module.exports = md;
