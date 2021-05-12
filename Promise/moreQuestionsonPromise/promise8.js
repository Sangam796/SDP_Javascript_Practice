/**
 * then() functions return a new promise, different from the original. Since catch functions are actually then() functions behind the scenes, they also return new promises. So if that's true then you could do something like this:

Do this, no matter what happened before
The text "Do this" is not displayed because the "Something failed" error caused a rejection.

The last then() call in the function doSomething() should log in my main call something but logs undefined instead. Find out what's wrong with the code and fix it. You will see two logs in my function something, this is not an error. This is from the test. Do not remove any then() or catch() functions

Notes
 */
function doSomething (isGoingToResolve = true) {
    return new Promise((resolve, reject) => {
    if (isGoingToResolve) {
        resolve("something")
    } else {
        reject("something else")
    }
  }).then(response => {
    console.log("in my function",response)
			return response;
  }).catch(error => {
    console.log("in my function",error)
  })
}

doSomething().then(response => {
    console.log("in my main call", response)
})