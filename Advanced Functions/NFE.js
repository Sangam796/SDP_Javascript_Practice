//Named function expression
/* use of NFE:  It allows function to referred itself internally so if the variable referring to the function gets assigned to any other object or null
still internally there will not be any error if the function expression is being called using its name*/

let greeting = function greet(person)
{
    if(person)
    console.log(`Hello, ${person}`);
    else
    greet("Guest"); //using function nae to recall itself

}

greeting(); 
nextGreeting = greeting;
greeting = null;
nextGreeting();// no issue, as internally function is invoked using function name, not variable referring to the function