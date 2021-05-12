/**
 * Add the necessary pieces to fix the promise and the then function.
It should resolve to a message success!.
Re-assign the result to the settled value inside the then function.
 */

var result = ""

let promise = new Promise((resolve) => {
     resolve('success!');
   
})

promise.then(res=>
    {
        result = res;
        console.log(result);
    });