/**Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
 * 
 */

function filterRange(arr, a ,b)
{
    let filtered = [];
    for(let i=0;i<arr.length;i++)
    if(arr[i]>=a&&arr[i]<=b)
    filtered.push(arr[i]);

    return filtered;
}
let arr = [1,2,4,11,3,7];
let filtered = filterRange(arr,3,11);
console.log(filtered);
console.log(arr);