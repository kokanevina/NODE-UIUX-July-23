
class Employee{
    #empId; 
    #empName;
    #basicSalary;
    constructor(empId=0,name="BB",salary=1000){
        console.log("in parameterized constructor........");
        this.#empId=empId; 
        this.#empName=name;
        this.#basicSalary=salary;
    }
    getDetails(){
        return "Employee Details [id="+this.#empId+"  name="+this.#empName+"  basic salary="+this.#basicSalary+"]";
    }
    getDetails1(){
        return `Employee Details [id=${this.#empId} name=${this.#empName} basic salary=${this.#basicSalary}]`;
    }
    get ename(){  // get property
        return this.#empName;
    }
    get eid(){
        return this.#empId;
    }
    get bsal(){
        return this.#basicSalary;
    }
    set bsal(basicSalary){
        this.#basicSalary=basicSalary;
    }
    set eid(empId){
        this.#empId=empId;
    }
    set ename(empName){
        this.#empName=empName;
    }
} // class ended
let emp1=new Employee(56,"Prammod",56000);
console.log(emp1.getDetails());
/*do not call set get properties like function 
instead access those like variable */
console.log("Name of emp1:"+emp1.ename); // do not call like function
emp1.bsal=78000;   // setter property accessed
console.log(emp1.getDetails());
// access basicsalary via get property
console.log(emp1.bsal);
// change the name of employee
emp1.ename="Pramod";
console.log("______________");
for(let key in emp1){
    console.log(key);
}