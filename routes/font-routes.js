const express = require('express');
const fontRouter = express.Router();

const fontHelper = require('../services/googleFonts/googleFonts-helper');
const fontController = require('../controllers/font-controllers');

fontRouter.get('/', fontHelper.getFont, fontController.index);

module.exports = fontRouter;