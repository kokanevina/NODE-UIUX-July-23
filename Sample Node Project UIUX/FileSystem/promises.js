const file_s=require('fs');
const promise=file_s.promises;
let fileData="";
async function myReadFileFun(path) {
    let  data = await promise.readFile(path,'utf-8').catch((err) => console.log('Failed to read file'+err));
    return data;
}

myReadFileFun("./Files/SachinInfo.txt")
    .then((d) => {console.log(d); fileData=d;})
    