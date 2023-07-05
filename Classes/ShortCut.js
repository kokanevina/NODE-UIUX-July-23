class Student{
    constructor(sid=0,sname="Pooja",sstd="5th"){
        this.sid=sid;
        this.sname=sname;
        this.sstd=sstd;
    }
}
let std1=new Student();
console.log(std1.sid);
let std2=new Student(45,'mohan','6th');
console.log(std2.sid);