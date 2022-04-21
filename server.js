// required packages
const express = require('express');
const { db } = require('./db/db.json');

// TODO: create server and deploy to heroku
// initiate server
const app = express();

app.get('/api/notes', (req, res) => {
    console.log(db);
    res.json(db);
});
// having server listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
});
// TODO: create HTML routes:
    // GET /notes should return notes.html 
    // GET * should return index.html
// TODO: create API routes: 
    // GET /api/notes should read db.json and return all saved notes 
    // POST /api/notes should receive new note on the req.body and add to db.json and return the new note to client
    // each note should have unique ID when saved
// BONUS TODO: create delete route
    // DELETE /api/notes/:id should receive query parameter containing the id note to delete
    // will need to read all notes from the db.json file, remove note with given id, and rewrite notes to db.json file