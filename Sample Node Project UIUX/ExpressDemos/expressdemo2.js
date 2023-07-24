let express=require('express');

let server=express();
server.listen(8080, ()=>console.log("server listening on port 8080"));

server.use(express.static('Resources'));

server.get('/login',(request, response)=>{
    response.sendFile("D://Sessions/NODE-UIUX-July-23/Sample Node Project UIUX/Resources/LoginForm.html");
})
// do same to serve images e.g. /roseflower