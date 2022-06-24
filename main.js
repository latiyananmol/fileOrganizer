// entry point of my command
let helpFun=require("./commands/help");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
//commands are node main.js tree "directorypath"
// node main.js organizer "directorypath"
let path=inputArr[1];
switch(command){
    case "tree":
        treeFn(path);
    break;
    case "organize":
        organizeFn(path);
    break;
    case "help":
        helpFn(path);
        helpFun.help;
        
    break;
    default:
    console.log("Here, Input is incorrect");
    break;
}


