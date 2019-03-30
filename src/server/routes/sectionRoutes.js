const app = require('express');
const sectionController = require('../controllers/sectionController');

const sectionRouter = app.Router();

sectionRouter.get('/:id', sectionController.findByProgramId);

sectionRouter.get('/:program_id/:id', sectionController.findById);

module.exports = sectionRouter;
