const express = require('express');
const noteRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const notesController = require('../controllers/notes-controllers');

// authHelpers is not necessary here! take note!
noteRoutes.get('/', authHelpers.loginRequired, notesController.index);


noteRoutes.post('/', authHelpers.loginRequired, notesController.create);

noteRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('notes/note-add', {
        currentPage: 'add',
    });
});

noteRoutes.get('/:id', notesController.show);
noteRoutes.get('/:id/edit', authHelpers.loginRequired, notesController.edit);
noteRoutes.put('/:id', authHelpers.loginRequired, notesController.update);

// noteRoutes.delete('/:id',function(){
// console.log ("delete---------------------------------------------"); 
// });  //authHelpers.loginRequired, notesController.delete);
noteRoutes.delete('/:id', authHelpers.loginRequired, notesController.delete);

module.exports = noteRoutes;