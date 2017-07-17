var fs = require('fs');

var add = fs.writeFileSync('./tasks.json', 'utf8').JSON.stringify()
console.log(add);

module.exports.add
