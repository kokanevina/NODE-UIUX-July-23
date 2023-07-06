function test(){
    // body of function
}
test();
let cubFun=function(num){
    return num*num*num;
}
cubFun(3);
// arrow functions
// functions without name
// no function keyword
// fat arrow btnween simple paranthesis and body 
// oneline function
// less code, faster development
let arrow1=(num)=>{
        return num*num*num;
}
console.log(arrow1(2));
// 1. if function is accepting single parameter then () are optional
//2. if function body have single stmt then {} are optional
//3. if funcion body have single return stmt then return keyword not allowed, function automatically
//will return the result

let arrow2=num=>num*num*num;  // function
console.log(arrow2(2));