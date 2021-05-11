//promise below gets resolved after 1 second
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; 
  
    console.log(result); // "done!"
  }
  
  f();
