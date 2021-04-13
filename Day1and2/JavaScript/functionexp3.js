let age =17;

let welcome;

if (age <= 18) {

  welcome = function() {
    console.log("You are under 18.");
  };

} else {

  welcome = function() {
    console.log("you are no longer udner 18.");
  };

}

welcome(); /* welcome function is accessible outside if else block because it is declared outside the block and is
assigned with functon inside the block which is done using function expression. With function declaration 
it is not possible to access function declared inside the block, outside of it. */
