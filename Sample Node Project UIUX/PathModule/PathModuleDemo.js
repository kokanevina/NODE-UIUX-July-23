const mypath=require('path');

let filePath1="../FileSystem/Files/SachinInfo.txt"; // relative path

let filePath2="D://Sessions/NODE-UIUX-July-23/Sample Node Project UIUX/FileSystem/Files/SachinInfo.txt" // absolute path

console.log(mypath.basename(filePath1));
console.log(mypath.delimiter);
console.log(mypath.dirname(filePath2));
console.log(mypath.extname(filePath2));

let pathInfo={
    dir: 'D:\\Sessions\\NODE-UIUX-July-23\\Sample Node Project UIUX\\FileSystem\\Files',
    base :'SachinInfo.txt'
}

let stringpath=mypath.format(pathInfo);
console.log(stringpath);

console.log(mypath.isAbsolute(filePath1));
console.log(mypath.isAbsolute(filePath2));

let dir1="FileSystem";
let dir2="Files";
let fileName="SachinInfo.txt";
let joinedPath=mypath.join(dir1,dir2,fileName);
console.log(joinedPath);