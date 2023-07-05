
class Employee{
    /*instance variables : public */
    empId; 
    empName;
    basicSalary;
    /* in one class multiple constructors not allowed*/
    constructor(empId=0,name="BB",salary=1000){
        console.log("in parameterized constructor........");
        this.empId=empId; // easy differentiate
        this.empName=name;
        this.basicSalary=salary;
    }
    getDetails(){
        return "Employee Details [id="+this.empId+"  name="+this.empName+"  basic salary="+this.basicSalary+"]";
    }
    getDetails1(){
        return `Employee Details [id=${this.empId} name=${this.empName} basic salary=${this.basicSalary}]`;
    }
} // class ended

let emp1=new Employee(5,"Poonam",12000); // p constructor
console.log(emp1.empId); // inital value =0
console.log(emp1.empName);  // public able to access
console.log(emp1.basicSalary);
console.log(emp1.getDetails());

let emp2=new Employee(6,"Amol",45000); // object created and initialized
console.log(emp2.empId); // undefined
let details=emp2.getDetails1();
console.log(details);

let emp3=new Employee();
console.log(emp3.getDetails());

let emp4=new Employee(7,"Karuna");
console.log(emp4.getDetails());



console.log(emp1.empId);
console.log(emp1.empName);
console.log(emp1.basicSalary);
console.log("______________");
for(let key in emp1){
    console.log(key);
}
console.log("______________");
for(let key in emp1){
    console.log(key);
    console.log(emp1[key]); // key is not actual instance variable, but it is variable  holding instance variable

}
console.log("______________");
for(let key in emp1)
    console.log(emp1[key]); // key is not actual instance variable, but it is variable  holding instance variable

