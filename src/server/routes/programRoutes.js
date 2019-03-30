const app = require('express');
const programController = require('../controllers/programController');

const programRouter = app.Router();

programRouter.get('/', programController.findAll);

programRouter.get('/:id', programController.findById);

module.exports = programRouter;
