const { sumRequestHandler } = require("./Sum");

const requestHandler = (req, res) => {
  console.log("Started Server");
  console.log(req.headers, req.url);

  res.setHeader("Content-Type", "text/html");
  console.log("Server started ..");

  if (req.url == "/") {
    res.write(`<html>
        <body><h2>WELOCME TO CALCULATOR APP</h2>
        <a href="calculate">Calculator</a>
        </body>
        </html>
        
        `);
    return res.end();
  } else if (req.url === "/calculate") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <body><h2>Here is  the calculator app..</h2>
      <form action="/result" method="POST">
      <input type="text" placeholder="Enter 1st no" id="t1" name="t1" />

      <input type="text" placeholder="Enter 2nd no" id="t2" name="t2" />
     <br>
      <input type="Submit" value="add" id="add" name="add" />
   </form>
      </body>
      </html>
      
      
      `);
    return res.end();
  } else if (req.url === "/result" && req.method == "POST") {
    return sumRequestHandler(req, res);
  }
};

exports.requestHandler = requestHandler;
