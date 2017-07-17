var fs = require('fs');

var list = fs.readFileSync('./tasks.json', 'utf8')
console.log(list);


module.exports.list
