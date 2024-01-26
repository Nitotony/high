const { readFile, writeFile } = require("fs");
console.log('we are starting')
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `jer ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
        }

        const tammy = result;

        console.log('we are done==');

      }
    );
  });
});

console.log("we  are starting the next")