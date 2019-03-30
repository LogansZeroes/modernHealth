const Program = require('../data/models/programs');

const programController = {};

programController.findAll = (req, res) => {
    Program.findAll()
            .then( programs => {
                res.status(200).json({programs});
            })
            .catch(err => {
                console.log(`THERE WAS AN ERROR: ${err}`);
                res.status(500).json({err});
            })
}

programController.findById = (req, res) => {
    Program.findById(req.params.id)
            .then( program => {
                res.status(200).json({program});
            })
            .catch(err => {
                console.log(`THERE WAS AN ERROR: ${err}`);
                res.status(500).json({err});
            })
}

module.exports = programController;
