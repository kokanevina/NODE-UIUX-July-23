let http= require('http');
const url = require('url');

let httpServer=http.createServer((request,response)=>{
   let reqaddress=request.url;
   let parsedq=url.parse(reqaddress,true);
   /* response.setHeader('Content-Type', 'text/html'); */
   response.writeHead(200, {
    'Content-Type': 'text/html',
    }); 
    response.write("<p>HostName:"+request.headers.host+"</p>"); 
    response.write("<p>PathName:"+parsedq.pathname+"</p>");
    let myQuery=parsedq.query; 
    response.write("<p>Company Name:"+myQuery.companyName+"</p>");
    response.write("<p>Branch :"+myQuery.branch+"</p>");
    response.write("<p>Est. year :"+myQuery.eyear+"</p>");
   response.end();
});


httpServer.listen(8080, "localhost",()=>console.log("Server listening on port 8080..."));