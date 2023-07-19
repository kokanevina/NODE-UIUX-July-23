

const file_s=require('fs');

file_s.unlink("Files/sample.txt",function(err){
    console.log(err);
    if(err==null)
        console.log("File Deleted Successfully");
});

