let math=require('./MathModule');

console.log(math);

let res1=math.addFun(34,67);
console.log(`Addition is ${res1}`);
let res2=math.subtractFun(45,23);
console.log(`Subtraction is ${res2}`);
console.log(`Multiplication is ${math.multFun(4,6)}`);
console.log(`Company name is ${math.companyName}`);