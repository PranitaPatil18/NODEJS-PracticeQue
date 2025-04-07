const fs = require("fs");

const requestHandler = (req, res) => {
  console.log("Started Server");
  console.log(req.headers, req.url);
  if (req.url === "/register") {
    res.setHeader("Content-Type", "text/html");
    res.write("<body>");
    res.write('<form action="/submitDetails" method="Post">');
    res.write(
      '<input type="text" name="fname" placeholder="Enetr your name:"/><br>'
    );
    res.write('<input type="radio" name="radiobtn" id=male value="male" />');
    res.write("<h3>male</h3>");
    res.write(
      '<input type="radio" name="radiobtn" id=female value="female" />'
    );
    res.write("<h3>Female</h3>");
    res.write('<button type="Submit" value="submit">Submit here</button>');
    res.write("</form>");
    res.write("</body>");

    res.write("</html>");
    return res.end();
  } else if (req.url === "/aboutus") {
    res.setHeader("Content-Type", "text/html");
    res.write("<body>");
    res.write("<h2> contact us on +932222010");
    res.write("</body>");

    res.write("</html>");
    return res.end();
  }

  if (req.url === "/submitDetails" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunks of the data:" + chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const jsonBodyobj = {};
      for (const [key, val] of params.entries()) {
        jsonBodyobj[key] = val;
        console.log(jsonBodyobj);
        fs.writeFileSync("myfile.txt", JSON.stringify(jsonBodyobj));
      }
    });
  }
};
exports.requestHandler = requestHandler;
