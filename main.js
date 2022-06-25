// entry point of my command
let helpFun=require("./commands/help");
let organizeFun=require("./commands/organize")
let inputArr=process.argv.slice(2);
let command=inputArr[0];
//commands are node main.js tree "directorypath"
// node main.js organizer "directorypath"
let path=inputArr[1];
switch(command){
    case "tree":
        // calling of treen function 
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


