// var person = {
//     name: 'Sourabh'
// };

// var strPerson = JSON.stringify(person);

// console.log(typeof strPerson);
// console.log(strPerson);


// var strEmployee = '{"name": "Sourabh", "age": 33}';
// var employee = JSON.parse(strEmployee);

// console.log(typeof employee);
// console.log(employee);


const fs = require('fs');

var originalNote = {
    title: 'My remainder',
    body: 'Eat lunch'
};

var strOriginalNote = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', strOriginalNote);

var strNote = fs.readFileSync('notes.json');

var note = JSON.parse(strNote);

console.log(typeof note);
console.log(note.title);

