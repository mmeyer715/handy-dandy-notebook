// required packages
const express = require('express');
const path = require('path');
const fs = require('fs');

// TODO: create server and deploy to heroku
// initiate server
const app = express();

// middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

// view route to return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// TODO: create API routes: 
// GET /api/notes should read db.json and return all saved notes 
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, results) => {
        if (err) {
            throw err
        } else {
            res.send(results);
        }
    });
})

// POST /api/notes should receive new note on the req.body and add to db.json and return the new note to client
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, results) => {
        if (err) {
            throw err
        }
        console.log(JSON.parse(results));
        const existingNotes = JSON.parse(results);
    });
    // fs.writeFile('./db/db.json', JSON.stringify(req.body), (err) => {
    //     if (err) {
    //         throw err
    //     } else {
    //         res.send('File created!');
    //     }
    // });
    // console.log(req.body);
})
    // each note should have unique ID when saved


    // view route to return user to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// having server listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`)
});


// BONUS TODO: create delete route
    // DELETE /api/notes/:id should receive query parameter containing the id note to delete
    // will need to read all notes from the db.json file, remove note with given id, and rewrite notes to db.json file