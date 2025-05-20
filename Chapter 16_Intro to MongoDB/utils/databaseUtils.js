// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "Pranita",
//   database: "airbnb",
// });
// module.exports = pool.promise();
const mongo = require("mongodb");
const { get } = require("../routes/storeRouter");
const MongoClient = mongo.MongoClient;
const MONGO_URL =
  "mongodb+srv://root:Pranita@mongo.vrnvudi.mongodb.net/?retryWrites=true&w=majority&appName=Mongo";
let _db; //_means its a private var
const MongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      // console.log(client);
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error while connecting to mongo:", err);
    });
};
const getDB = () => {
  if (!_db) {
    throw new Error("MongoDB Not connected");
  }
  return _db;
};

exports.MongoConnect = MongoConnect;
exports.getDB = getDB; //here we are exporting multiple modules so we have to use named exports
