
class Employee{
    /*instance variables */
    empId; 
    empName;
    basicSalary;
    constructor(){
        console.log("default constructor called......");
        this.empId=0;
        this.empName="AAA";
        this.basicSalary=1000;
    }
    /* in one class multiple constructors not allowed*/
   /*  constructor(id,name,salary){
        this.empId=id;
        this.empName=name;
        this.basicSalary=salary;
    } */
    getDetails(){
        return "Employee Details [id="+this.empId+"  name="+this.empName+"  basic salary="+this.basicSalary+"]";
    }
    getDetails1(){
        return `Employee Details [id=${this.empId} name=${this.empName} basic salary=${this.basicSalary}]`;
    }
}
let emp1=new Employee(); // default constructor
console.log(emp1.empId); // inital value =0
emp1.empId=1;  // state change
emp1.empName="Hari";
emp1.basicSalary=23000;
console.log(emp1.empId);
console.log(emp1.empName);
console.log(emp1.basicSalary);
console.log(emp1.getDetails());

let emp2=new Employee(); // object created and initialized
console.log(emp2.empId); // undefined
let details=emp2.getDetails1();
console.log(details);