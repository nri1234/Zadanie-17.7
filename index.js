var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(stats);
});
fs.readFile('./text.txt', 'utf-8', function (err, data) {
    console.log('Data before saving!'.blue);
    console.log(data);
    fs.appendFile('./text.txt', 'And that is their look after the record!', function (err) {
        if (err) throw err;
        console.log('Saved!'.blue);
        fs.readFile('./text.txt', 'utf-8', function (err, data) {
            console.log('Data after saving'.blue)
            console.log(data);
        });
    });
});
fs.readdir('.', function saveFile(err, files) {
    if (err) throw err;
    console.log('My new file');
    fs.writeFile('./newindex.js', './newtext.txt', files, function (err) {
        if (err) throw err;
        console.log('File has been saved');
    });
});
