console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

var unique_arr = _.uniq(['sourabh', 'city', 'city', 1, 4, 'sourabh', 4, 5])

console.log(unique_arr);

// var result = notes.add(45,12);

// console.log(result);

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}. You are ${notes.age} years old!\r\n`);


