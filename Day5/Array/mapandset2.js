
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function sortString(a,b)
{
    if(a>b)
    return -1;
    else
    return 1;
}
function aclean(arr)
{
    let sortedList = new Map();
    for(let item of arr)
   { let sortedItem = item.toLowerCase().split('').sort().join('');;
    sortedList.set(sortedItem,item);
}
    return Array.from(sortedList.values());
}

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"