function calculate(a,b,c)
{
   return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            if(a<0||b<0||c<0)
            return reject("Number is negative.");
            resolve(a+b+c)
        },1000);
    })
}


/*
calculate(1,2,3).then((result)=>
{
    console.log(result);
    return calculate(result,3,4);
}).then(result=>
    {
        console.log(result);
    }).catch(error=>console.log(error));
*/



//async await  makes code much more cleaner and readable in comparision to promise chaining

    const add= async ()=>
    {
        const sum1 = await calculate(1,2,3);
        const sum2 = await calculate(sum1,3,4);
        const sum3 = await calculate(sum2,4,5);
        return sum3;
    }



    add().then(result=>console.log(result)).catch(err=>console.log(err));