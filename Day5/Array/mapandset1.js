//Create a function unique(arr) that should return an array with unique items of arr.
function unique(arr) {
    /* your code */
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  function unique(values)
  {
     return Array.from(new Set(values));
  }
  
console.log(unique(values)); // Hare, Krishna, :-O