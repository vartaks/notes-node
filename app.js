console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

var command = process.argv[2];

console.log('Command: ', command);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else {
    console.log('Command not found');
}