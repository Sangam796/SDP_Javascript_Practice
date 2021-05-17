const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
let client = undefined;
const url = 'mongodb://localhost:27017/MyFirstDatabase';
const collection1 = 'Students';
const dbName = 'MyFirstDatabase';;

MongoClient.connect(url,{ useUnifiedTopology: true },(err, dbclient)=>
{
   try
    {
        client = dbclient;
    console.log("MongoDB connection successful");
    }
    catch(err)
    {
        console.log(err.message);
    }
});



router.get('/',async(req,res)=>
{try{
    const Students = await client.db(dbName).collection(collection1);
    const result = await Students.find({}).toArray();
    res.send(result);
}
catch(err)
{
    res.send(err.message);
    console.log(err.message);
}
});

router.get('/:_id',async(req,res)=>
{
    try{
    let id = parseInt(req.params._id);
     Students = await client.db(dbName).collection(collection1);
   const result = await Students.findOne({_id: id})
    res.send(result);
    }
    catch(err)
    {
        res.send(err.message);
        console.log(err.message);
    }
})

router.post('/',async(req,res)=>{
try
{
const details =
    {
        name : req.body.name,
        name : req.body.name,
        course : req.body.course,
        yearOfGraduation : req.body.yearOfGraduation,
    };
    const result = await client.db(dbName).collection(collection1).insertOne(details);   
    res.send(result.ops);
}
catch(err)
{res.send(err.message);
    console.log(err.message);
}
});



router.put('/:_id',async(req,res)=>
{
    try{
    const userId = parseInt(req.params._id);
    const details = req.body;
    console.log(details);
    const result = await client.db(dbName).collection(collection1).updateOne({_id: userId},{$set:details});
    console.log("Result modified");
   res.send(result);
    }
    catch(err)
    {
        console.log(err.message);
        res.send(err.send);
    }
});


router.delete('/:_id',async(req,res)=>
{
    try{
    const Students = await client.db(dbName).collection(collection1);
    const result = await  Students.deleteOne(
        {
            _id: parseInt( req.params._id)
        },1
    )
   res.send("Member Deleted");
}catch(err)
{
    res.send(err.message);
    console.log("Error caught");
}
});


module.exports = router;
