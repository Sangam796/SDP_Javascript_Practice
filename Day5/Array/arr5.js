
arr = ["HTML", "JavaScript", "CSS"];
function copyAndSort(arr)
{
    let copied = arr.slice();
    copied.sort();
    return copied;
}
copiedSort = copyAndSort(arr);
console.log(copiedSort);
console.log(arr);