
const http=require('http');

function requestListener(req,res)
{
  
console.log("server start listening!!");
console.log(req.url,req.method,req.headers);

res.setHeader('Content-Type','text/html');
res.write(`
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>myntra</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li><a href="home">home</a></li>
          <li><a href="men">men</a></li>
          <li><a href="women">women</a></li>
          <li><a href="child">child</a></li>
          <li><a href="cart">cart</a></li>
        </ul>
      </nav>
    </head>
  </body>
  </html>
`);

if(req.url==='/home')
{
res.write('<h1> welcome to home</h1>');
}
if(req.url==='/men')
{
  res.write('<h1>welcome to men</h1>');
  
}if(req.url==='/women')
  {
    res.write('<h1>welcome to women</h1>');
  }if(req.url==='/child')
    {
      res.write('<h1>welcome to child </h1>');
    if(req.url==='/cart')
      {
        res.write('<h1>welcome to cart </h1>');
      }

}
}
const server=http.createServer(requestListener);
server.listen(3005);
