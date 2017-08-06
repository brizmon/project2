const Notes = require('../models/notes');
const notesController = {};

notesController.index = (req, res) => {
    Notes.findAll()
        .then(notes => {
            res.render('notes/note-index', {
                currentPage: 'index',
                message: 'ok',
                data: notes,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

notesController.show = (req, res) => {
    Notes.findById(req.params.id)
        .then(note => {
            res.render('notes/note-single', {
                currentPage: 'show',
                message: 'ok',
                data: note,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

notesController.create = (req, res) => {
    Notes.create({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
    }, req.user.id).then(() => {
        res.redirect('/notes');
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

notesController.update = (req, res) => {
    Notes.update({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
    }, req.params.id).then(note => {
        res.redirect(`/notes/${req.params.id}`);
    }).catch(err => {
        res.status(500).json(err);
    });
};

notesController.edit = (req, res) => {
    Notes.findById(req.params.id)
        .then(note => {
            res.render('notes/note-single-edit', {
                currentPage: 'edit',
                data: note,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

notesController.delete = (req, res) => {
    console.log ("delete functions"); 
    Notes.destroy(req.params.id)
        .then(() => {
            res.redirect('/notes');
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

module.exports = notesController;