const { readFileSync, writeFileSync } = require("fs");
console.log("we are begining ")
const first = readFileSync("./content/first.txt", "utf-8");

const sec = readFileSync("./content/second.txt", "utf-8");

console.log("we are done")
console.log(first, sec);

writeFileSync(
  "./content/result-sync.txt",
  `herer is the result:${first} and ${sec}`,
  { flag: "a" }
);

console.log("we are staring the new task")