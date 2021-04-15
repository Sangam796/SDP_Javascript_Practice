//object creation using constructor (function name should start with uppercase)
function School()
{ // impli
    this.name = "KIIT";
    this.location = "Bhubaneswar";
    this.founder = "Achutya Samanta";
    console.log(new.target) //used to know if the function is being called using new keyword or not.
}


let kiit = new School();
console.log(kiit.founder);
console.log(kiit);


//this can be used outside object also in a normal function

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

user.hifunc = sayHi;
admin.hifunc = sayHi;
user.hifunc();
admin.hifunc();