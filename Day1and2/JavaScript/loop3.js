//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

let enteredNum = prompt("Enter a number greater than 100", '');
while (enteredNum < 100) {
    enteredNum = prompt("Enter a number greater than 100", '');
}
alert(enteredNum);