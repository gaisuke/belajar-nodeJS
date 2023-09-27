var fs = require('fs');

exports.readModule = function(path){
    fs.readFile(path, 'utf8', (err, response) => {
        err ? console.log(err) : console.log(response);
    })
};