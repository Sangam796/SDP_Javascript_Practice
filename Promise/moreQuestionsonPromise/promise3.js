//program to demonstrate error handling in promise chaining, all the nested promise will be skipped till the catch block is found
//rest of the code below .catch() will be exucuted.

//output of the below script is 
/*
Error 1
Success 4
*/

function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promise = job();

promise

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
}).then(function() {
    console.log('Success 4');
});
