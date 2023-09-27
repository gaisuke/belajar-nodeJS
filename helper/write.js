var fs = require('fs');

exports.writeModule = function(path, data){
    fs.writeFile(path, data, (err)=>{
        err ? console.log(err) : console.log('sukses membuat file');
    })
};