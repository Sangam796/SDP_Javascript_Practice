//sum to n
function sumUptoN(n)
{
    if(n==1)
    return 1;
    else
    return n + sumUptoN(n-1);
}

console.log(sumUptoN(10));
