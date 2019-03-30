const Section = require('../data/models/sections');

const sectionController = {};

sectionController.findById = (req, res) => {
    Section.findById(req.params.program_id, req.params.id)
            .then( section => {
                res.status(200).json({section});
            })
            .catch(err => {
                console.log(`THERE WAS AN ERROR: ${err}`);
                res.status(500).json({err});
            })
}

sectionController.findByProgramId = (req, res) => {
    Section.findByProgramId(req.params.id)
            .then( sections => {
                res.status(200).json({sections});
            })
            .catch(err => {
                console.log(`THERE WAS AN ERROR: ${err}`);
                res.status(500).json({err});
            })
}

module.exports = sectionController;
