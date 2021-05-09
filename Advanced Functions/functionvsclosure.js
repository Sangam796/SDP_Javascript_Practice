//function sometimes can replace the closures.
function funcCall()
{
   
    function counter()
    {
        counter.count++;
    }
    counter.count=0;
    return counter.count;
}
funcCall();
let counter = funcCall();
console.log(counter);
console.log(counter);