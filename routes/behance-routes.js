const express = require('express');
const behanceRouter = express.Router();

const behanceHelper = require('../services/behance/behance-helper');
const behanceController = require('../controllers/behance-controllers');

behanceRouter.get('/', behanceHelper.getBehance, behanceController.index);

module.exports = behanceRouter;