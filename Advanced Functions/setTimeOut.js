/*
Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
*/

function printNumbers(from, to)
{
    let start = from;
   let timerId =  setInterval(function()
    {
        console.log(start);
        start++;
        if(start>to)
    clearInterval(timerId);
    },1000);
}
printNumbers(1,5);



function printNUmbers(from, to)
{
    let start = from;
    let timerId = setTimeout(function print()
    {
        console.log(start);
        start++;
        if(start<=to)
        timerId = setTimeout(print,1000)
    },1000);
   
}
printNUmbers(1,10);