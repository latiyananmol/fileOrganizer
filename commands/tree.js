const fs=require("fs");
const path=require("path");
//console.log("anmol");

//treeFn("C:\\Users\\latiy\\Desktop\\dev\\webdev\\lecture23\\fileOrganizer\\commands");
//console.log(fs.existsSync("C:\\Users\\latiy\\Desktop\\dev\\webdev\\lecture23\\fileOrganizer\\commands"));


function treeFn(dirPath){
    if(dirPath==undefined){
        console.log("Please enter the correct path its uncorrect");
        return;
    }
    else{
        let doesExist=fs.existsSync(dirPath);
        if(doesExist==true){
            treeHelper(dirPath,"  ");
        }else {
            treeHelper(dirPath,"  ");
        }
    }
}
function treeHelper(targetPath,indent){
    let isFile=fs.lstatSync(targetPath).isFile();
    if(isFile==true){
        let filename=path.basename(targetPath);
        console.log(indent+"|-"+filename);
        return;
    }
    let dirName=path.basename(targetPath);
    console.log(indent+"|--"+dirName);
    let children=fs.readdirSync(targetPath);
    for(let i=0;i<children.length;i++){
        let childpath=path.join(targetPath,children[i]);
        treeHelper(childpath,indent+"\t");
    }
}

module.exports={
    treeFn:treeFn
}