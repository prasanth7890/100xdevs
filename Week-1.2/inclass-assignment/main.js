// // 1. counter from 30 - 0
startTime = Date.now();

for(let i=30;i>=0;i--) {
    console.log(i);
}

endTime = Date.now();
console.log(endTime - startTime + 'ms');


// // 2. setTimeout method 
console.log('settimeout call starts here: ' + Date.now());

setTimeout(()=>{    
    console.log('inner function called now: ' + Date.now());
}, 0);

console.log('setTImeout code ends here: ' + Date.now()); 


// 3. create a terminal clock (HH:MM:SS)
let readline = require('readline');

setInterval(()=>{
    console.clear();
    process.stdout.cursorTo(0);
    process.stdout.write(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit', hour12:false}));   
}, 1000);








