const fs=require("fs"); // fs module
const path=require("path");// path module


let types = {media: ["mp4", "mkv", "mp3"],
archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
app: ['exe', 'dmg', 'pkg', "deb"],images: ['png','jpg','jpeg'],
images:['png','jpg','jpeg']

}
function organize(srcPath){
    if(srcPath==undefined){
        //console.log(srcPath);
        srcPath=process.cwd(); // The process.cwd() method returns the current working directory of the Node.js process.
       //console.log(srcPath);
      // console.log("Flag(just for checking )");
    
    }
    // else{

    //     console.log(srcPath);
    // }
    let organizedFiles=path.join(srcPath,"organized_files");
// work of sorcefile <srcPath/organized_files>yeh string mil gyi hai ab mkdir
console.log("organized files folder path is ",organizedFiles);
if(fs.existsSync(organizedFiles)==false){
fs.mkdirSync(organizedFiles); // this will create new folder
}else{
    console.log("folder already exist")
}
// 3 scan the entire source path 

// read the content of the directory

let allFiles=fs.readdirSync(srcPath);// only read dir basically reads the names of files present in dir 
console.log(allFiles);


//4 tRAVERSAL TO allFiles and classify
for(let i=0;i<allFiles.length;i++){
   // let ext=allFiles[i].split(".")[1];// see what is do
   //let ext=path.extname(allFiles[i]); // only take extension name(example .exe,.txt)
   // console.log(ext);
   // 1 check if it is a file of folder
   let fullPathOfFile=path.join(srcPath,allFiles[i]); // complete path ajega
   //1 check is it is file of folder
   let iFile=fs.lstatSync(fullPathOfFile).isFile();// lstatSync(file ya folder ka sara kala chitta 
// this is how to check wheather it is file or Folder)
   if(iFile){
    // 1.1 get extenstion name
    let ext =path.extname(allFiles[i].split("."))[1];
    // 1.2 get folder name
    let folderName=getfolderName(ext);// archives
    // 1.3 copy from src folder(src path)and paste in dest folder (folder_name eq. media , music anything)
    copyFileToDest(srcPath,fullPathOfFile,folderName);//  copyFileToDest(yhaSe,YehChezz,yhaPar);
   }

}


}
//let srcPath="C:\Users\latiy\Desktop\dev\webdev\lecture23\fileOrganizer\downloads";
//organize(srcPath);
//let srcPath= "C:\Users\latiy\Desktop\dev\webdev\lecture23\fileOrganizer\downloads";
let srcPath="C:\\Users\\latiy\\Desktop\\dev\\webdev\\lecture23\\fileOrganizer\\download"; // catch
organize(srcPath);



function getfolderName(ext){
    // magic 



    return folderName;
}
function copyFileToDest(srcPath,fullPathOfFile,folderName){
    // magic 
    
}