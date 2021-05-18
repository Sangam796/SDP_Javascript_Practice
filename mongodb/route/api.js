const express = require("express");
const router = express.Router();
const mdbMethod = require('../mongodb/mongomethod');



router.get("/", async (req, res) => {
  try {
    
    const result = await mdbMethod.Find();
    res.send(result);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});


router.get("/:_id", async (req, res) => {
  try {
    let id = parseInt(req.params._id);
    const result = await mdbMethod.FindOne(req);
    res.send(result);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});


router.post("/", async (req, res) => {
  try {
    const result = await  mdbMethod.Insert(req)
    res.send(result.ops);
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});


router.put("/:_id", async (req, res) => {
  try {
    const result = await mdbMethod.Update(req);
    console.log("Result modified");
    res.send(result);
  } catch (err) {
    console.log(err.message);
    res.send(err.send);
  }
});


router.delete("/:_id", async (req, res) => {
  try {
    const result = await mdbMethod.Delete(req);
    res.send(result);
  } catch (err) {
    res.send(err.message);
    console.log("Error caught");
  }
});

module.exports = router;
