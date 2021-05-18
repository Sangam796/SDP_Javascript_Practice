const mongoclient = require("../mongo/db");
let collectionName;
mongoclient.mongoConnection(() => {
collectionName = mongoclient.getCollection();
});


async function Find(id)
{
    var result;
    if(id!==undefined)
     result =  await collectionName.findOne({ _id:parseInt(id) });
     else
     result = await collectionName.find({}).toArray();
    return result;
}

async function FindOne(id)
{
    const result =  await collectionName.findOne({ _id:parseInt(id) });
    return result;
}

async function Insert(details)
{
    const result = await collectionName.insertOne(details);
    return result;
}

async function InsertMany(details)
{
    const result = await collectionName.InsertMany();
    return result;
}

async function Update(id,body)
{
const result = await collectionName.updateOne(
    { _id: parseInt(id,body)},
   { $set: body });
return result;
}


async function UpdateUsingQuery(id,body)
{
const result = await collectionName.updateOne(
    { _id: parseInt(id,body)},
   { $set: body });
return result;
}


async function Delete(id)
{
    const result = await collectionName.deleteOne(
        {
          _id: parseInt(id),
        });
        return result;
}


async function  DeleteUsingQuery(id)
{
    const result = await collectionName.deleteOne(
        {
          _id: parseInt(id),
        });
        return result;
}

module.exports = {
    Find,
    FindOne,
    Insert,
    Update,
    Delete,
    UpdateUsingQuery,
    DeleteUsingQuery,
}
