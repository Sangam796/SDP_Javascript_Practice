//sort in descending order
function sortInDesc(a,b)
{
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}

let arr = [1,2,3,4,5];
console.log(arr);
arr.sort(sortInDesc);
console.log(arr);