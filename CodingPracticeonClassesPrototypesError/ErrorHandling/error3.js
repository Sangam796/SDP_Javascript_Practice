//check whether name and age are present in json or not. If not throw ValidationError(user-defined error) to handle it

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  

  function readUser(json) {
    let user = JSON.parse(json);
  
    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }
  
    return user;
  }

  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log("Invalid data: " + err.message);  
    } else if (err instanceof SyntaxError) { 
      console.log("JSON Syntax Error: " + err.message);
    } else {
      throw err; 
    }
  }