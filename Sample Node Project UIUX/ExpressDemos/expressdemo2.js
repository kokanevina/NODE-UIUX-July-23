let express=require('express');
let bodyParser=require('body-parser');
let server=express();
server.listen(8080, ()=>console.log("server listening on port 8080"));

server.use(express.static('Resources'));

server.get('/login',(request, response)=>{
    response.sendFile("D://Sessions/NODE-UIUX-July-23/Sample Node Project UIUX/Resources/LoginForm.html");
})
server.get('/processdata_getrequest', (request,response)=>{
    // get request : data is in link in key value pair  username=what u type, password=wat u type

    console.log(request.query.username);
    console.log(request.query.password);
    //response.send("Welcome "+request.query.username);
    let user ={
        user_name:request.query.username,
        password:request.query.password
    }
   response.send(JSON.stringify(user));
})
let dataParser=bodyParser.urlencoded({extended:false});
server.post('/processdata_postrequest',dataParser, (request,response)=>{
    // get request : data is in link in key value pair  username=what u type, password=wat u type

    console.log(request.body.username);
    console.log(request.body.password);
    response.send("Welcome "+request.body.username);
    
})