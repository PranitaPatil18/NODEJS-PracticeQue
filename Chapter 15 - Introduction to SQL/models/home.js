// Core Modules
// const fs = require("fs");
// const path = require("path");
// const rootDir = require("../utils/pathUtil");
// const Favourite = require("./favourite");

// const homeDataPath = path.join(rootDir, "data", "homes.json");
const db = require("../utils/databaseUtils");
module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, id, description) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.id = id;
    this.description = description;
  }

  save() {
    return db.execute(
      "insert into homes (houseName, price, location, rating, photoUrl,description)values(?,?,?,?,?,?)",
      [
        this.houseName,
        this.price,
        this.location,
        this.rating,
        this.photoUrl,
        this.description,
      ]
    );
  }
  static fetchAll() {
    // fs.readFile(homeDataPath, (err, data) => {
    //   callback(!err ? JSON.parse(data) : []);
    // });
    return db.execute("SELECT * FROM HOMES");
  }

  static findById(homeId, callback) {
    // this.fetchAll((homes) => {
    //   const homeFound = homes.find((home) => home.id === homeId);
    //   callback(homeFound);
    // });
  }

  static deleteById(homeId, callback) {
    //   this.fetchAll((homes) => {
    //     homes = homes.filter((home) => home.id !== homeId);
    //     fs.writeFile(homeDataPath, JSON.stringify(homes), (error) => {
    //       Favourite.deleteById(homeId, callback);
    //     });
    //   });
  }
};
