const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.urlencoded());
app.use(userRouter);

app.use(hostRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`server running on address http://localhost:${port}`);
});
