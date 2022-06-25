
function help(){
    // here used backtics:
    console.log(`
    List of All the commands :
                     node main.js tree directorypath
                     node main.js organize directorypath
                     node main.js help
    `);
}

// function abc(){
//     console.log("in help.js");
// }
module.exports={
    // key value
    // hathi:helpFn,
    // ghoda:abc
    help:help,
    // abc:abc
}
