let firstTerm = 1;
let commonDiff = 3;
let nthTerm = 6;

let arithmeticSeries = (a, d, n) =>
{
    for(var i =a ; i<=n ;i++)
    console.log(a+((i-1)*d)); 
}

arithmeticSeries(firstTerm,commonDiff,nthTerm);
