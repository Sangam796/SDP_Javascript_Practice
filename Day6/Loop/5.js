//Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
function progressDays(runs) {
let count = 0;
for(let i = 0; i<runs.length-1; i++)
{
    if(runs[i]<runs[i+1])
    count++;
}
return count;
}
console.log(progressDays([3, 4, 1, 2]));
console.log(progressDays([10, 11, 12, 9, 10]));
console.log(progressDays([6, 5, 4, 3, 2, 9]));
console.log(progressDays([9, 9]));
