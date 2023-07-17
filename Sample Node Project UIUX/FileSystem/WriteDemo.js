const file_s=require('fs');
/* 
file_s.writeFile("Files/SachinInfo.txt",'hello this is new data being added', function(err){
    console.log(err);
    if(err==null)
        console.log("Contents added Successfully");
}) */


file_s.appendFile("Files/SachinInfo.txt",'Welcome to Neosoft', function(err){
    console.log(err);
    if(err==null)
        console.log("Contents appended Successfully");
})

// writeFileSync
// appendFileSync
