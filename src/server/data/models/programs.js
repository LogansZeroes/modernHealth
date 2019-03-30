const db = require('../db/config');

const Program = {};

Program.findAll = () => {
    return db.query(
        `SELECT * FROM programs`
    );
};

Program.findById = id => {
    return db.oneOrNone(
        `SELECT * FROM programs WHERE id = $1`, [id]
    );
};

module.exports = Program;
