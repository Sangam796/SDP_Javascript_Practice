/**let func = (arg1, arg2, ..., argN) => expression
 *let func = function(arg1, arg2, ..., argN) {
  return expression;
};
if curly braces is used return statement is to be written explictly
for there is only one argument paranthesis() is not mandatory but if there is no argument paranthesis() is mandatory
 */

let age =17;
let welcome = age<=17 ? () => console.log("You are under 18.") : ()=>    console.log("you are no longer udner 18.");

welcome(); /* welcome function is accessible outside if else block because it is declared outside the block and is
assigned with functon inside the block which is done using function expression. With function declaration 
it is not possible to access function declared inside the block, outside of it. */
