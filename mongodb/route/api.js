const express = require("express");
const router = express.Router();
const mongoclient = require("../mongo/db");
let collectionName;
mongoclient.mongoConnection(() => {
  collectionName = mongoclient.getCollection();
});

router.get("/", async (req, res) => {
  try {
    const Students = await collectionName;
    const result = await Students.find({}).toArray();
    res.send(result);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    let id = parseInt(req.params._id);
    Students = await collectionName;
    const result = await Students.findOne({ _id: id });
    res.send(result);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const details = {
      _id: req.body._id,
      name: req.body.name,
      course: req.body.course,
      yearOfGraduation: req.body.yearOfGraduation,
    };
    const result = await collectionName.insertOne(details);
    res.send(result.ops);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const userId = parseInt(req.params._id);
    const details = req.body;
    console.log(details);
    const result = await collectionName.updateOne(
      { _id: userId },
      { $set: details }
    );
    console.log("Result modified");
    res.send(result);
  } catch (err) {
    console.log(err.message);
    res.send(err.send);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const Students = await collectionName;
    const result = await Students.deleteOne(
      {
        _id: parseInt(req.params._id),
      },
      1
    );
    res.send("Member Deleted");
  } catch (err) {
    res.send(err.message);
    console.log("Error caught");
  }
});

module.exports = router;
