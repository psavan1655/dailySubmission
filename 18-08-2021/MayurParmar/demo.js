// // const { name, me } = require("./index");

// // me();
// // console.log(name);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("I am Home Page");
  }
  if (req.url === "/about") {
    res.end("i am About page");
  }

  res.end(
    `<h1>Oops!</h1><p>We can't seem to find the page  you are  looking for</p><a href="/">back home</a>`
  );
});

server.listen(5000);
