//new is another way to create function
let greeting = new Function('guest','console.log("Namaste " + guest)');
greeting("uncle");

/*
when a function is created using new Function its [[Environment]] is set to reference to global lexical environment, not the current one.
*/
/*
function getfunc()
{
    let value = "test";
    let func = new Function('console.log(value)'); //this line will give error, as value is in current lexical environment, but func referred to global lexical environment
    return func;
}
getfunc()();
*/