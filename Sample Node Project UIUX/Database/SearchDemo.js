const mongoose=require('mongoose');
let express=require('express');
let server=express();
server.listen(8080, ()=>console.log("server listening on port 8080"));

mongoose.connect('mongodb://127.0.0.1:27017/uiux_node')
   .then(()=>{
    console.log("Connected.....");
    // findAllRecords();
    // findMatchingRecords();
    //findOneRecord();
    findSigleRecord();
   }).catch("Exception occured").finally("this code executing in any case...");

   const empSchema = new mongoose.Schema({ eid:Number,ename:String,esalary:Number, dcode:String, eprofile:String});
   const Employee=mongoose.model('Employee', empSchema); // employees collection

   async function findAllRecords(){
    const allEmployees=await Employee.find({}).exec();
    console.log(allEmployees);

    server.get('/getemployees',(request, response)=>{
        response.send(JSON.stringify(allEmployees));
     })
   }
   async function findMatchingRecords(){
    const employees=await Employee.find({dcode:'LD'}).exec(); // all matching records
    console.log(employees);
   } 
   async function findOneRecord(){
    const employee=await Employee.findOne({dcode:'LD'}).exec(); // 1st matching record
    console.log(employee);
   } 

   async function findSigleRecord(){
    const employee=await Employee.findById("64c2628668393b11a4fc8ad0"); // send primary key only
    console.log(employee);
   } 