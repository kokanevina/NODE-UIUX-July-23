
let express=require('express');

let server=express();

server.get('/',(request, response)=>{
    response.send("Hello I got your get request... Thank you");
})
server.get('/showvegfoods',(request, response)=>{
    response.send("Here is the Veg Food Menu...");
})
server.get('/show*',(request, response)=>{
    response.send("Show foods/maincourse/breakfast/beverages anything can be there...");
})

server.post("/", (request,reponse)=>{
    response.send("POST");
})
server.listen(8080, ()=>console.log("server listening on port 8080"));