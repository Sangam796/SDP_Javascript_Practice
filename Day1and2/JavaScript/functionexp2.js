let num1 = 12;
let num2 = 14;
let choice = 0;
function performOperation(add , sub, choice)
{
    if(choice ==1)
    add(num1,num2);
    else
    sub(num1, num2);
}

let addition = function(firstno,secondno)
{
    console.log(`Sum is ${firstno+secondno}`);
}

let substraction = function(firstno,secondno)
{
    console.log(`Difference is ${firstno-secondno}`)
}

performOperation(addition,substraction, choice);