
class Employee{
    /*instance variables */
    empId; 
    empName;
    basicSalary;
    /* in one class multiple constructors not allowed*/
    constructor(id=0,name="BB",salary=1000){
        console.log("in parameterized constructor........");
        this.empId=id;
        this.empName=name;
        this.basicSalary=salary;
    }
    getDetails(){
        return "Employee Details [id="+this.empId+"  name="+this.empName+"  basic salary="+this.basicSalary+"]";
    }
    getDetails1(){
        return `Employee Details [id=${this.empId} name=${this.empName} basic salary=${this.basicSalary}]`;
    }
}
let emp1=new Employee(5,"Poonam",12000); // p constructor
console.log(emp1.empId); // inital value =0
console.log(emp1.empName);
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
