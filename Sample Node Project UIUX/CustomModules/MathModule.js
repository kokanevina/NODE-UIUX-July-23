

let add=(num1,num2)=>num1+num2;

let subtract=(num1,num2)=>num1-num2;

let mult =(num1,num2)=>num1*num2;

let companyName="Neosoft";

module.exports.addFun=add;
module.exports.subtractFun=subtract;  
module.exports.multFun=mult;  
module.exports.companyName=companyName; 
module.exports={add,subtract,mult,companyName}