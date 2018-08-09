console.log('Starting notes module...');

const fs = require('fs');

var addNote = (title, body) => {
    console.log('Adding note', title, body);

    var notes = [];

    var note = {
        title,
        body
    };

    try {   
        var strNotes = fs.readFileSync('notes-data.json');
        notes = JSON.parse(strNotes);
    } catch(e) {

    }

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    } else {
        console.log('Cannot add duplicate note.');
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting note ', title);
};

var removeNote = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
