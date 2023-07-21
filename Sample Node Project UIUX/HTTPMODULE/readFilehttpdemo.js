// read any html file (loginform.html) write the file on broweser as server reponse

let fs=require('fs');
let http=require('http');


let httpServer=http.createServer((request,response)=>{

    fs.readFile('../MyFiles/LoginForm.html',(err,data)=>{
        if(err!=null)
            response.end("File Reading ISSUE......");
        response.write(data);
        response.end();
    });
});


httpServer.listen(8080, ()=>console.log("server listening to port 8080"));