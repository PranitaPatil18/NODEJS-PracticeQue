const fs = require("fs");

const http = require("http");

function requestListener(req, res) {
  console.log(req);
  console.log("Server has started listening!");
  console.log(req.url, req.headers, req.method);

  if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<body>");
    res.write("<h2> plz checkout the products</h2>");
    res.write("</body>");

    res.write("</html>");
    return res.end();
  }
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
        fs.writeFileSync("roughfile.txt", JSON.stringify(jsonBodyobj));
      }
    });

    // fs.writeFileSync("formsubmit.txt","Pranita im going to submit the form..");
    // res.statusCode=302;//REDIRECTION
    // res.setHeader('location','/products');
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title> My first doc</title></head>");
  res.write("<body>");
  res.write("<h2> This is my nodejs lecture </h2>");
  res.write("</body>");

  res.write("</html>");
  res.end();
}
const server = http.createServer(requestListener);
server.listen(3001);
