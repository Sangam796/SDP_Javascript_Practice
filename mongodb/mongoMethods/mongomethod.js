const mongoclient = require("../mongo/db");
let collectionName;
mongoclient.mongoConnection(() => {
collectionName = mongoclient.getCollection();
});


function Find()
{
    const Students =  collectionName;
    return Students.find({}).toArray();
}

function FindOne(req)
{
    const Students =  collectionName;
    return Students.findOne({ _id:parseInt(req.params._id) });
}

function Insert(req)
{
    const Students =  collectionName;
     return Students.insertOne(req.body);
}

function Update(req)
{
const Students = collectionName;
return Students.updateOne(
     { _id: parseInt(req.params._id) },
    { $set: req.body });
}


function Delete(req)
{
    const Students = collectionName;
    return Students.deleteOne(
        {
          _id: parseInt(req.params._id),
        });
}

module.exports = {
    Find,
    FindOne,
    Insert,
    Update,
    Delete,
}
