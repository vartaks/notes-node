console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age} years old!\r\n`);


