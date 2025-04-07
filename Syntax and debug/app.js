const http = require("http");

const runtimeError = require("./runtimeError");

function requestListener(req, res) {
  console.log(req);
  console.log("Server has started listening!");
  console.log(req.url, req.method);
  runtimeError();
}
const server = http.createServer(requestListener);
server.listen(9002);
