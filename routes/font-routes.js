const express = require('express');
const fontRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const fontHelper = require('../services/googleFonts/googleFonts-helper');
const fontController = require('../controllers/font-controllers');



fontRouter.post('/terminal', fontController.create); 

//fontRouter.post('/font', authHelpers.loginRequired, fontController.create);

fontRouter.get('/', fontHelper.getFont, fontController.index);
//fontRouter.post('/', authHelpers.loginRedirect, fontController.save);




fontRouter.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render( 'auth/login');
});

//fontRouter.get('/:id', fontController.show);
fontRouter.delete('/:id', authHelpers.loginRequired, fontController.delete);

// fontRouter.get('/savedFonts',fontController.savedFonts, function(){
//  res.render('fonts/font-single');

//console.log("saved Fonts +++++++++++++++++++++++++++++++++++"); 
// });

fontRouter.get('/savedFonts',fontController.savedFonts, function(){
 res.render('fonts/font-single');
});


module.exports = fontRouter;
