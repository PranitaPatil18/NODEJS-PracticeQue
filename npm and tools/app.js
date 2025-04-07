const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server started..");
  console.log(req.method, req.url, req.headers);
});
server.listen(9992);
