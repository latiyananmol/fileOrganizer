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



}
organize();
