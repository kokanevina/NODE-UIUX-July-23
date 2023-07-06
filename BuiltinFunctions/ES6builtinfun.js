// foreach function

let salaryArray=[56000,23000,45000,54000,89000,23000,55000,88000,45000,92000,94000];

salaryArray.forEach((ele,index,array)=>{
    console.log(ele+"  "+index+"  "+array);
});
salaryArray.forEach(ele=>console.log(ele));
console.log("______________");
// get first matching salary which is greater than 80000 : find
let result=salaryArray.find(ele=>ele>80000)
console.log(result);
console.log("______________");
// get salaries which are greater than 80000 : filter
let resultArray=salaryArray.filter(ele=>ele>80000).forEach(ele=>console.log(ele));
// get sum of all salaries : reduce
console.log("______________");
let sum=salaryArray.reduce((sum,e)=>sum+e);
console.log(sum);
// initial value in sum = 1st element of an array = 56000
// initial value in e = 2nd element of an array = 23000
//sum=56000+23000
console.log("______________");
// how to set initial value of sum externally?  sum=1000
let sum1=salaryArray.reduce((sum,e)=>sum+e, 1000);
// initial value in sum = external value = 1000
// initial value in e = 1st element of an array = 56000
console.log(sum1);