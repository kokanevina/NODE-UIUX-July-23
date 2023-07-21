let fs=require('fs');

fs.readFile('../MyFiles/LoginForm.html','utf-8',(err,data)=>{
    if(err!=null)
        console.log("File Reading ISSUE......");
    console.log(data);
});