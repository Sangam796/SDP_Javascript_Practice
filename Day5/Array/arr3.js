/**
 * Write a function filterRangeInPlaceInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
 * 
 */


 function filterRangeInPlace(arr, a ,b)
 {
     for(let i=0;i<arr.length;i++)
     if(!(arr[i]>=a&&arr[i]<=b))
     {arr.splice(i,1);
        i--;
     }

 }
 let arr = [1,2,4,11,3,7];
 console.log(arr);
filterRangeInPlace(arr,2,7);
 console.log(arr);