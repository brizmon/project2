const express = require('express');
const noteRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const notesController = require('../controllers/notes-controllers');

noteRoutes.get('/',function(){
    console.log ("login");
}, notesController.index);


noteRoutes.post('/', authHelpers.loginRequired, notesController.create);

noteRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
    res.render('notes/note-add', {
        currentPage: 'add',
    });
});

noteRoutes.get('/:id', notesController.show);
noteRoutes.get('/:id/edit', authHelpers.loginRequired, notesController.edit);
noteRoutes.put('/:id', authHelpers.loginRequired, notesController.update);
noteRoutes.delete('/:id', authHelpers.loginRequired, notesController.delete);

module.exports = noteRoutes;