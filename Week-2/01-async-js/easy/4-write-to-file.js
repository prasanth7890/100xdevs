const fs = require('fs');

let content = "Lorem"

fs.writeFile('output.txt', content , function() {
    console.log('saved file');
});


let i = 100000;
while(i>0) {
    i = i - 1;
}

content = "ipsum"
fs.writeFile('output.txt', content , function() {
    console.log('saved file 2');
});


i = 100000000;
while(i>0) {
    i = i - 1;
}
 
content = "dolor" 
fs.writeFile('output.txt', content , function() {
    console.log('saved file 3');
});