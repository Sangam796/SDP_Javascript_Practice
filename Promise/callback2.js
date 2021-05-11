//nested callback(callback hell) making the code to execute in regular order a() b() c()

function a(callback)
{
    setTimeout(()=>
    {
        console.log("result of a()")
        callback()
    },3000); //3 seconds delay
}

function b(callback)
{
    setTimeout(()=>
    {
        console.log("result of b()")
        callback()
    },2000); //2 seconds delay
    
}

function c(callback)
{
    setTimeout(()=>
    {
        console.log("result of c()")
        callback()
    },1000); //1 second delay
    
}

a( ()=> 
{
    console.log('a() is done');

    b(()=>
    {
        console.log('b() is done');
    c(()=>
    {
        console.log('c() is done');
    })
    })
})