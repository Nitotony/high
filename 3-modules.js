//Modules

/* modules help to reduce the size of the executing file by connecting 
the different parts of code to the executing file */
const names = require("./4-names");
const fun = require("./5-utils");

require("./7-mind-granade"); // the fuctions in this file will automatically be executed if they are explicitly called in the file

const ale = require("./6-alternateflv");
fun.sayHi(names.john);

fun.sayHi(names.peter);

console.log(ale.person.name);

console.log(ale.person.age);
