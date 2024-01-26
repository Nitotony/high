const path = require("path");

console.log(path.sep);

console.log("\n");
const filePath = path.join("/content", "subfolder", "sl.txt");

console.log(filePath);

console.log(path.basename(filePath));

const absolute = path.resolve(__dirname, "content", "subfloder", "sl.txt");

console.log(absolute);
