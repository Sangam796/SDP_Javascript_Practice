//check if the string contains "program" as substring or not

let sentence = "I love programming.";
function checkSubString(str,substr)
{
    return (str.includes(substr));
}
console.log(checkSubString(sentence,"program"));

