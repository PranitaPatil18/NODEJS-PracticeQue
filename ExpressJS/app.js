// //core module
// const http = require("http");
//local module
const user = require("./user");
const { requestHandler } = require("./user");
//external mdule
const express = require("express");
const app = express();

app.use((req, res, next) => {
  next();
});
app.use((req, res, next) => {
  console.log("Came in second middleware");
  res.send("<p>Good afternoon GUyssssss!</p>");
  next();
});
app.use((req, res, next) => {
  console.log("Came in third middleware..");
});

// const server = http.createServer(app);
app.listen(5000);
