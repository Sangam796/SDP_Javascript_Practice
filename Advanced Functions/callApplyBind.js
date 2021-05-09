/*
call() is used to invoke a method directly passing in the reference which points to this variable inside the method
apply() is exactly same as call(), only difference is it takes the second argument as arraylist of the parameters which is to be passed
bind() doesn't invoke the method directly, but gives the copy of that exactly same method which can be invoked later.
 */

let name1 =
{
    firstName: "Sangam",
    lastName : "Giri",
}
let name2 =
{
    firstName: "Samir",
    lastName : "Dhimal",
}

let printFullName = function(hometown,country)
{
    console.log(this.firstName+" "+this.lastName+" from "+hometown+', '+country);
}

//call()
printFullName.call(name1, "Kathmandu","Nepal");
//apply()
printFullName.apply(name2,["Odisha","India"]);
//bind
let printName = printFullName.bind(name1,"Kathmandu","Nepal");
printName();