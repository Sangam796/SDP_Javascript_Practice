//find the maximum sum of subarray

let arr= [-1,2,-1,9];
function calcMaxSum(array)
{
    let maxSum=0;
let subArraySum = 0;
for(let item of array)
{
    subArraySum+= item;
    maxSum = Math.max(maxSum, subArraySum);
    if(subArraySum<0)
    subArraySum = 0;
}
return maxSum;
}
console.log(calcMaxSum(arr));