const mongoose = require('mongoose');

//Walidacja, aby notatki nie były puste
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;