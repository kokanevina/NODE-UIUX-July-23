

const file_s=require('fs');
console.log(file_s);

let contents=file_s.readFileSync('Files/SachinInfo.txt');
console.log(contents); // buffer object
console.log("____________");
console.log(contents.toString()); // string
console.log("____________");
try{
    let contents1=file_s.readFileSync('Files/SachinInfo.txt', 'utf-8');
    console.log(contents1); // string
}
catch(err){
    console.log(err);
}
console.log("After catch");