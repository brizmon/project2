const db = require('../db/config');
const Note = {};

Note.findAll = () => {
    return db.query('SELECT * FROM fontNotes');
}

Note.findById = (id) => {
    return db.oneOrNone(`
    SELECT * FROM fontNotes
    WHERE id = $1
    `, [id]);
}

Note.create = (note, userid) => {
    return db.one(`
    INSERT INTO fontNotes
    (title, category, description, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [note.title, note.category, note.description, userid]);
}

Note.update = (note, id) => {
    return db.one(`
    UPDATE fontNotes SET
    title = $1,
    category = $2,
    description = $3
    WHERE id = $4
    RETURNING *
    `, [note.title, note.category, note.description, id]);
}

Note.destroy = (id) => {
    return db.none(`
    DELETE FROM fontNotes
    WHERE id = $1
    `, [id]);
}

module.exports = Note;