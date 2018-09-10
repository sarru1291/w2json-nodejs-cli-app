const yargs = require('yargs');
const operation = require('./operation.js');
var argv = yargs.argv;

var command = argv._[0];

if (command === 'add') {
    operation.add();
} else if (command === 'remove') {
    var pid = argv.pid;
    operation.remove(pid);
} else if (command === 'update') {
    operation.update();
} else if (command === 'show') {
    var pid = argv.pid;
    operation.show(pid);
} else if (command == 'showall') {
    operation.showAll();
} else {
    console.log('command not found');
}