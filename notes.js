console.log('Starting notes module...');

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};


module.exports.add = (a, b) => {
    return a+b;
}