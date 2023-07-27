const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/uiux_node')
   .then(()=>{
    console.log("connected...");
    //insertSingleEmp();
    insertManyEmp();
}).catch("Exception occured").finally("this code executing in any case...");


const empSchema = new mongoose.Schema({ eid:Number,ename:String,esalary:Number, dcode:String, eprofile:String});
const Employee=mongoose.model('Employee', empSchema); // use this schema and create a model
// collection gets automatically create if not available : employees
console.log("DONE");

const deptSchema = new mongoose.Schema({dcode:String,dname:String});
const Department=mongoose.model('Department', empSchema); // use this schema and create a model
// collection gets automatically create if not available : departments
console.log("DONE");


async function insertManyEmp(){
  const emp1={
        eid:14,
        ename:"Sameer",
        esalary:90000,
        dcode:"LD",
        eprofile:"Java Trainer"
    };
    const emp2={
        eid:16,
        ename:"Shama",
        esalary:67000,
        dcode:"LD",
        eprofile:"DotNet Trainer"
    };
    const emp3={
        eid:18,
        ename:"Karan",
        esalary:67000,
        dcode:"DN",
        eprofile:"DotNet Developer"
    };
  const reply=  await Employee.insertMany([emp1,emp2,emp3]);
  console.log(reply); // returs array of documents which are inserted
  console.log("Many records Inserted.....");
}

async function insertSingleEmp(){
    const emp=new Employee({
          eid:12,
          ename:"Pooja",
          esalary:90000,
          dcode:"UI",
          eprofile:"UI Developer"
      });
    const reply=  await emp.save();
    console.log(reply); // returs the document which is inserted
    console.log("Inserted.....");
  }