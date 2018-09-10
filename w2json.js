const yargs = require('yargs');
const operation = require('./operation.js');

var pid = {
    describe: 'Prisoner Id',
    demand: true,
    alias: 'p'
};
var argv = yargs.command('add', 'Add prisoner detail').
command('remove', 'Remove prisoner detail', {
    pid: pid
}).
command('show', 'Show details of particular Prisoner', {
    pid: pid
}).command('showall', 'Show details of All Prisoners').alias('v', 'version').
alias('h', 'help').
help().argv;

var command = argv._[0];

if (command === 'add') {
    operation.add();
} else if (command === 'remove') {
    var pid = argv.pid;
    operation.remove(pid);
} else if (command === 'show') {
    var pid = argv.pid;
    operation.show(pid);
} else if (command == 'showall') {
    operation.showAll();
} else {
    console.log('command not found');
}