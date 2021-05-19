const axios = require('axios').default;
//get request
async function GetALL()
{
   await axios.get('http://localhost:5000/user')
.then((response)=>
{
    console.log(response.data);
})
.catch((error)=>
{
    console.error(error.message);
})

}

async function GetOne()
{
   await  axios.get('http://localhost:5000/user/1')
.then((response)=>
{
    console.log(response.data);
})
.catch((error)=>
{
    console.error(error.message);
})
}


async function Write()
{
    await axios.post('http://localhost:5000/user',
    {
        _id : 5,
        name: "Nassoro",
        course: "BIT",
        yearOfGraduation: '2025'
    }).then((response)=>
    {
        console.log(response.data);
    }).catch(error=>
        {
            console.error(error.message);
        })
}

async function UpdateOne()
{
    await axios.put('http://localhost:5000/user/1',{
        name : "Aqiq",
    }).then(response=>
        {
            console.error("modified count = ",response.data.modifiedCount);
        }).catch(error=>
            {
                console.error(error.message);
            })
}


async function Delete()
{
    await axios.delete('http://localhost:5000/user/5',{
    }).then(response=>
        {
            console.error("delete count = ",response.data.deletedCount);
        }).catch(error=>
            {
                console.error(error.message);
            })
}


//GetALL();
//GetOne();
//Write();
//UpdateOne();
//GetALL();
//Delete();
