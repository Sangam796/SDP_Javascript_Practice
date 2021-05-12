/** */
//output will be  UnhandledPromiseRejectio as reject() callbacks is not returned from promise
//can be settled returning reject(new Error('The Fails!)) instead of Promise.reject(new Error('The Fails!'))
var p = new Promise((resolve, reject) => {
    return Promise.reject(new Error('The Fails!'))
  })
  p.catch(error => console.log(error))
  p.catch(error => console.log(error.message))