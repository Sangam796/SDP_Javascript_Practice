const express = require("express");
const router = express.Router();
const mdbMethod = require('../mongoMethods/mongomethod');



router.get("/", async (req, res) => {
  
    const result = await mdbMethod.Find();
    if(result!==null)
    {
      console.log("document found");
    res.status(200).send(result);
    }
    else
    res.status(404).send("Not found");
});


router.get("/:_id", async (req, res) => {
  try {
    const result = await mdbMethod.FindOne(req.params._id);
    if(result)
    {
    res.status(200).send(result);
    }
    else
    throw new Error;
  } catch (err) {
    res.status(404).send("document not found");
    console.error(err);

  }
});


router.post("/", async (req, res) => {
  try {
    const result = await  mdbMethod.Insert(req.body)
    res.status(201).send(result.ops);
  } catch (err) {
    res.status(406).send(err.message);
    console.log(err.message);
  }
});


router.put("/:_id", async (req, res) => {
  try {
    const result = await mdbMethod.Update(req.params._id,req.body);
    if(result.modifiedCount===0)
    throw new Error(`_id: ${req.params._id} is not matched with the documnets' _id`);
    res.status(201).send(result);
  } catch (err) {
    console.log("Document could not be updated.");
    res.status(406).send(err.message);
  }
});


router.delete("/:_id", async (req, res) => {
  try {
    const result = await mdbMethod.Delete(req.params._id);
    if(result.deletedCount===0)
    throw new Error("Unable to delete")
    res.status(200).send(result);
  } catch (err) {
    res.status(404).send(err.message);
    console.log("Error: Couldn't delete");
  }
});

module.exports = router;
