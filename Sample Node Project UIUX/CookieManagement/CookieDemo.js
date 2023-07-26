let express=require('express');
let bodyParser=require('body-parser');
let cookieParser=require('cookie-parser');
let server=express();
server.listen(8080, ()=>console.log("server listening on port 8080"));

server.use(express.static('Resources'));
server.use(cookieParser());
server.get('/login',(request, response)=>{
    response.sendFile("D://Sessions/NODE-UIUX-July-23/Sample Node Project UIUX/Resources/LoginForm.html");
});

let dataParser=bodyParser.urlencoded({extended:false});
server.post('/processdata_postrequest',dataParser, (request,response)=>{
    response.cookie("user",request.body.username, {maxAge:180000}); // till browsing session ends
    response.cookie("companyName","Neosoft"); 
    response.send("Welcome "+request.body.username+"(cookie set)");
    
});
server.get('/getcookie',(request, response)=>{
   let username=request.cookies['user'];
   let company=request.cookies['companyName'];
   response.send("Cookie value:"+username+" & "+company);
});
