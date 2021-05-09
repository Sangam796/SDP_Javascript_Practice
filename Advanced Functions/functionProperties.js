//function is an object so has its some usable properties
//1. function's name is accessible as the name property
function greeting()
{
    console.log("Namaste");
}
console.log(greeting.name);

//2. length property(returns the number of parameters in function)
function countParam(a,b,c)
{

}
console.log(countParam.length);

// we can add our own custom properties 
function funcCall()
{
    funcCall.count++;
}
funcCall.count = 0;
console.log(funcCall.count);
funcCall();
funcCall();

console.log(funcCall.count);