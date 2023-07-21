let http= require('http');
let httpServer=http.createServer(function(request,response){
    response.write(request.url);
    response.write('hello neosoft employees.....');
    response.end('final data');
});
httpServer.listen(8080, ()=>{console.log("Server listening on port 8080...");});