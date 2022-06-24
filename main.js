// entry point of my command
let inputArr=process.argv.slice(2);
let command=inputArr[0];
//commands are node main.js tree "directorypath"
// node main.js organizer "directorypath"
switch(command){
    case "tree":
        treeFn(inputArr[1]);
    break;
    case "organize":
        organizeFn(inputArr[1]);
    break;
    case "help":
        helpFn(inputArr[1]);
    break;
    default:
    console.log("Bro Input is incorrect");
    break;
}
function treeFn(dirPath){
    console.log("tree command Implemented for ",dirPath);
}
function organizeFn(dirPath){
    console.log("Organize command Implemented for ",dirPath);
}
function helpFn(dirPath){
    // here used backtics:
    console.log(`
    List of All the commands :
                     node main.js tree "directorypath"
                     node main.js organizer "directorypath"
                     node main.js help
    `);
}


