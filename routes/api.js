const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/noteActions');


//pobieranie
router.get('/notes', noteActions.getAllNotes)
//pobieranie jednej
router.get('/notes/:id', noteActions.getNote)
//zapisywanie
router.post('/notes', noteActions.saveNote)
//edytowanie
router.put('/notes/:id', noteActions.updateNote)
//usuwanie
router.delete('/notes/:id', noteActions.deleteNote)

module.exports = router;