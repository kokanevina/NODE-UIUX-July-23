const url = require('url');

let address="http://localhost:8080/index.html?firstname=hari&lastname=sharma";

let parsedq=url.parse(address,true,true);
console.log(parsedq.host);
console.log(parsedq.hostname);
console.log(parsedq.path);
console.log(parsedq.pathname);
console.log(parsedq.search);
let myQuery=parsedq.query;
console.log(myQuery);
console.log(myQuery.firstname);
console.log(myQuery.lastname);