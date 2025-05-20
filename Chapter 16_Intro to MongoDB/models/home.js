const { getDB } = require("../utils/databaseUtils");
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
    const db = getDB();
    return db.collection("homes").insertOne(this);
  }
  static fetchAll() {
    const db = getDB();
    return db.collection("homes").find().toArray(); //this is promise ,function that wants to use this promise can use it..
  }

  static findById(homeId, callback) {}

  static deleteById(homeId, callback) {}
};
