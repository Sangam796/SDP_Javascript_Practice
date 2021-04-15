//Number1

//create a function to generate random number between min and max
min=1;
max = 10;
function random(min, max)
{
    randnum = min + (Math.random()+(min-max));
    return randnum.toFixed(2); //upto two precision value
}
console.log(random(1,5))