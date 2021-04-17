/**An array is special if every even index contains an even number and every odd index contains an odd number. Create a 
 * function that returns true if an array is special, and false otherwise. */
function isSpecialArray(arr)
{
    let isSpecial = false;
    for(let i = 0 ; i<arr.length;i+=2)
    if(arr[i]%2==0)
    isSpecial = true;

    return isSpecial;
}

console.log(isSpecialArray([4, 5, 6, 7, 0, 5]));


