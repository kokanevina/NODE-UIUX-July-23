

const file_s=require('fs');
let contents=file_s.readFileSync('Files/SachinInfo.txt');
console.log(contents);
console.log("____________");
console.log(contents.toString());
console.log("____________");
try{
    let contents1=file_s.readFileSync('Files/SachinInfo.txt', 'utf-8');
    console.log(contents1);
}
catch(err){
    console.log(err);
}
console.log("After catch");