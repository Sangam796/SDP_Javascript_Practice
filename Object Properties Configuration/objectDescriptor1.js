//make an object property unchangable
 'use strict';

let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false,
    configurable: false
  });
  
  user.name = "Pete";
  delete user.name;
