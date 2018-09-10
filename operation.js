const fs = require('fs');
const readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var add = () => {
    console.log('add');
};

var remove = () => {
    console.log('remove');
};

var update = () => {
    console.log('update');
};

var show = () => {
    console.log('show');
};

var showAll = () => {
    console.log('showAll');
};

module.exports = {
    add,
    remove,
    update,
    show,
    showAll
}