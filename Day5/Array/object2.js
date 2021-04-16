//Write a function count(obj) that returns the number of properties in the object:
let user = {
    name: 'John',
    age: 30
  };
  
  function count(user)
  {
      let arr = Object.keys(user);
      return arr.length;
  }
  console.log( count(user) ); 

