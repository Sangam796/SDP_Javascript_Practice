//truncate the string
let str = "Hey learners, Welcome to javascript.info";
let maxlength = 10;

function truncateStr(str, max)
{
    return str.substr(0,max) + "...";
}

console.log(truncateStr(str,maxlength));


//traversing through string using fo..of
string = "abcd";
for(let str of string)
console.log(str);