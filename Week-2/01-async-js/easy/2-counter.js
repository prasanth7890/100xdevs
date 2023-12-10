let cnt = 0;

for(let i=1;i<40;i++) { // used upto 40, so callstack can be empty after sometime and setTimeout will work.
    setTimeout(()=>{
        cnt += 1;
        console.log(cnt);
    }, i * 1000);
}