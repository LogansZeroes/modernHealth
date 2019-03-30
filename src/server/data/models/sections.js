const db = require('../db/config');

const Section = {};

Section.findByProgramId = id => {
    return db.query(
        'SELECT * FROM sections WHERE program_id = $1', [id]
    );
};

Section.findById = (program_id, id) => {
    return db.query(
        'SELECT * FROM sections WHERE program_id = $1 AND id = $2', [program_id, id]
    )
}

module.exports = Section;
