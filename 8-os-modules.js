const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`System up time is:${os.uptime} seconds`);

const Information = {
  name: os.type(),
  release: os.release(),
  totalmemory: os.totalmem(),
  freememory: os.freemem(),
};

console.log(Information);
