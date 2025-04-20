const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.send(`<h1>register home</h1>
    <form action="/host/add-home" method="POST">
   <input type="text" placeholder="Enter House name" name="house"/>
   <input type="submit" />

   </form>
    `);
});
hostRouter.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`<h1>home registered suceessfully </h1>
    
    `);
});
module.exports = hostRouter;
