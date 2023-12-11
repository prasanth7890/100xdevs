const fs = require('fs')

fs.readFile('a.txt', 'utf-8', function(err, data) {
//          1st way
//    data = data.split(" ");
//    let final = "";
//    for(let i=0;i<data.length;i++) {
//     if(data[i] !== '') {
//         final = final + data[i] + " ";
//     }
//    }



   //2. way
   final = data.split(' ').filter((word)=> word!=='').join(" ");

   fs.writeFile('a.txt', final, function(err) {
    console.log('Refined data is written succesfully');
   })
});


