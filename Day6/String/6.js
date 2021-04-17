//ReverseAndNot  123=> 321123

function ReverseAndNot(n)
{
    let str = n.toString();
    let reverseStr = ""
    for(let i = str.length-1;i>=0;i--)
     reverseStr  =reverseStr + str.slice(i,i+1);

    reverseStr  =  reverseStr + str;
    return +reverseStr;
}
