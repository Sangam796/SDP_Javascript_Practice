let grade = 'D';
switch (grade) {
    case "O":
        console.log("You percentage >= 90%");
        break;
    case "E":
        console.log("You percentage >= 80% and <90%");
        break;
    case "A":
        console.log("You percentage >= 70% and <80%");
        break;
    case "B":
        console.log("You percentage >= 60% and <70%");
        break;
    case "C":
        console.log("You percentage >= 50% and <60%");
        break;
    default:
        console.log("Your percentage is less than 50%\n Study hard.");

}