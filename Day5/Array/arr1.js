//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str)
{
    stringArray = str.split('-');
    backToString = stringArray[0];
    for(let i = 1;i<stringArray.length;i++)
    backToString += (stringArray[i].slice(0,1).toUpperCase() + stringArray[i].slice(1));
    console.log(backToString);
}

camelize("my-short-string");