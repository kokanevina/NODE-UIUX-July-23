let http= require('http');


http.createServer(function(request,response){
    console.log(request.url);
    response.write('hello neosoft employees.....');
    response.end('final data');
}).listen(8080);