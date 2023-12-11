let readline = require('readline');

setInterval(()=>{
    console.clear();
    process.stdout.cursorTo(0);
    process.stdout.write(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit', hour12:false}) + "\n");   
    process.stdout.write(new Date().toLocaleTimeString([],{hour: '2-digit', minute: '2-digit', second: '2-digit'}) + "\n");   
    process.stdout.write((new Intl.DateTimeFormat("en", {timeStyle: "medium"})).format(Date.now()))
}, 1000);