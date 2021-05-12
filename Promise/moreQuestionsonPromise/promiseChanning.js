//demo program for promise chaining
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); 
  
    return new Promise((resolve, reject) => { 
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) { // (**)
  
    console.log(result); // 2
  
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  
  }).then(function(result) {
  
    console.log(result); // 4
  
  });