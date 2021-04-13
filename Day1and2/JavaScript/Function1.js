//wap to find minumum of three numbers using function
let n1=10, n2=20, n3 = 5;
function getMinValue(n1, n2, n3)
{
    if(n1<n2 && n1<n3)
    return n1;
    else if(n2<n3)
    return n2;
    else
    return n3;
}

console.log(getMinValue(n1,n2,n3));