const { log } = require('console');
const file_s=require('fs');

let contents=file_s.readFileSync('Files/SachinInfo.txt'); // process getting blocked
console.log(contents.toString());

console.log("Hi.... after reading file...."); // it will get proceed when file read completed

file_s.readFile('Files/SachinInfo.txt','utf-8', function(er, data){
        if(er!=null)
            console.log("Error Occured");
        else
            console.log(data);
}); // process is not getting blocked
console.log("Hello.... after reading file....");
// readFileSync : BLOCKING IO
//readFile : NONBLOCKING IO