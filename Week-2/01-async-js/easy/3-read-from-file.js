const fs = require('fs');

//no expensive operation here
fs.readFile('a.txt', 'utf-8', function(err, data) {
    console.log(data);
});


// expensive operation here
let a = 1;
for (let i = 0; i < 10000; i++) {
    a = a + 1;        
}

fs.readFile('a.txt', 'utf-8', function(err, data) {
    console.log('2' + data);
});


// more expensive operation here
a = 1;
for (let i = 0; i < 1000000000; i++) {
    a = a + 1;        
}

fs.readFile('a.txt', 'utf-8', function(err, data) {
    console.log('3' + data);
});
