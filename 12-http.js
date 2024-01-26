const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is our home page");
  } else if (req.url === "/about") {
    res.end("this is our history");
  } else {
    res.end(
      `<h1>Sorry we are not able to find the page you are looking for</h1>
    <a href='/'>home</a>`
    );
  }
});

server.listen(5000);
