const { buffer } = require("stream/consumers");
const { URLSearchParams } = require("url");

const sumRequestHandler = (req, res) => {
  console.log(" im inside sumRequestHandler");
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log(chunk);
  });
  req.on("end", () => {
    const fulldata = Buffer.concat(body).toString();
    console.log("fulldata:" + fulldata);
    const params = new URLSearchParams(fulldata);

    const bodyObj = Object.fromEntries(params);
    const finalresult = Number(bodyObj.t1) + Number(bodyObj.t2);
    console.log(finalresult);
  });
};
exports.sumRequestHandler = sumRequestHandler;
