// -> without using framework

const http = require("http");

const server = http.createServer((req, res) => {
   if (req.url === "/") {
      res.write("<h1>Hello World</h1>");
      res.statusCode = 200;
      res.end();
   } else {
      res.write("<h1>404 Page Not Found</h1>");
      res.statusCode = 200;
      res.end();
   }
});

server.listen(8000, () => {
   console.log("Server is listening on port 8000");
});

// -> using expressjs framework

// const express = require("express");

// const app = express();

// app.get("/books", (req, res) => {});

// app.listen(8000, () => {
//    console.log("Server is listening on port 8000");
// });
