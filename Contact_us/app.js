const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("in first middleware!", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("in second   middleware!", req.url, req.method);
  // res.send("<p>In second!</p>");
  next();
});

// app.use((req, res, next) => {
//   console.log("in third   middleware!", req.url, req.method);
//   res.send("<p>response send to browser by 3rd middleware</p>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / url !", req.url, req.method);
  // res.send("<p>In second!</p>");
  next();
});
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us url !", req.url, req.method);
  res.send(`<h1>Plz Enter your details-></h1>
    <form action="/contact-us" method="POST">
    <input type="text" placeholder="ENter name" id="name" />
    
     <input type="email" placeholder="ENter email" id="name" />
    
    
    <input type="submit"/>
    </form>
    

    
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us url !", req.url, req.method);
  res.send(`<H1>THANKS FOR YOUR DETAILS</H1 `);
});
app.listen("5000");
