console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var result = notes.add(45,12);

console.log(result);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age} years old!\r\n`);


