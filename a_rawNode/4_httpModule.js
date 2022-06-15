const http = require("http"); // it will return an object which possesses methods

const server = http.createServer((request, response) => {
   if (request.url === "/") {
      response.write(`Hello World`);
      response.end();
   }
});

server.listen(3000, () => {
   console.log("Listening on port 3000");
});
// 8000 -> is port number. By port number it is decided which data is going to be used by which application. Port number can be compared to a hotel room number.

//-> the above code can be written as below format for more realization
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end();
//   }).listen(8080);
