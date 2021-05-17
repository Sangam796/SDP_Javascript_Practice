const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/MyFirstDatabase";
const collection1 = "Students";
const dbName = "MyFirstDatabase";
let client = undefined;
let db;

//this object will have two objects as property, first one to set connectiion to database and anotherone to return collection
let mongoConnectingObj = {
  mongoConnection: function (callback) {
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, dbclient) => {
      if (err) throw err;
      else {
        client = dbclient;
        db = client.db(dbName).collection(collection1);
        console.log("MongoDB connection successful");
      }
      return callback();
    });
  },
  getCollection: function () {
    return db;
  },
};

module.exports = mongoConnectingObj;
