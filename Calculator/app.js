const http = require("http");
const { requestHandler } = require("./Handler");
const server = http.createServer(requestHandler);
server.listen(9999);
