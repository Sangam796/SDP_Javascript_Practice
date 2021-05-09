//print linkedList
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };


  //in forward direction
  function printList(list)
  {
    console.log(list.value);
      if(list.next !=null)
      printList(list.next);
 }

  // in reverse direction  function printList(list)
  function printReverseList(list)
  {
    if(list.next !=null)
    printReverseList(list.next);
    console.log(list.value);
}

printList(list);
printReverseList(list);
