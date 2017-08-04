const express = require('express');
const fontRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const fontHelper = require('../services/googleFonts/googleFonts-helper');
const fontController = require('../controllers/font-controllers');

fontRouter.get('/', fontHelper.getFont, fontController.index);
fontRouter.post('/', authHelpers.loginRedirect, fontController.save);

fontRouter.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('fonts/font-add', {
        currentPage: 'add',
    });
});

fontRouter.get('/:id', fontController.show);
fontRouter.delete('/:id', authHelpers.loginRequired, fontController.delete);

module.exports = fontRouter;
