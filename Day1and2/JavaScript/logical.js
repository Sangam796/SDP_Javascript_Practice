let userName = prompt("Who's There?", "");
if (userName == 'Admin') {
    let password = prompt("Enter password.", '');
    if (password == "TheMaster")
        alert("Welcome!");
    else if (password == null || password == "")
        alert("Cancelled");
    else
        alert("Wrong Password");
} else if (userName == null || userName == "")
    alert("Cancelled");
else
    alert("I don't \"know\" you.");