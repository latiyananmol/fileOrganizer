// entry point of my command
let helpFun=require("./commands/help");
let organizeFun=require("./commands/organize");
let treeFn=require("./commands/tree");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
//commands are node main.js tree "directorypath"
// node main.js organizer "directorypath"
let path=inputArr[1];
switch(command){
    case "tree":
        treeFn.treeFn(path);
        
    break;
    case "organize":
       organizeFun.organize(path);
    break;
    case "help":
        console.log("anmol");
        helpFun.help();
         break;
         default:
        console.log("Here, Input is incorrect");
         break;
}


// C:\\Users\\latiy\\Desktop\\dev\\webdev\\lecture23\\fileOrganizer\\download
//for help
// List of All the commands :
// node main.js tree directorypath
// node main.js organize directorypath
// node main.js help