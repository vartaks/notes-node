const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;

var command = argv._[0];

// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log("Note created");
        notes.logNote(note);
    } else {
        console.log('Cannot add duplicate note with title', argv.title);
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);

    if (note) {
        console.log("Note found");
        notes.logNote(note);
    } else {
        console.log('Note not found with title', argv.title);
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);

    var message = noteRemoved ? 'Note was removed' : 'Note not found';

    console.log(message);
} else {
    console.log('Command not found');
}