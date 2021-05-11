//callback function like Array.Prototype.map()  are synchronous
//demo program for synchronous callback function

function executingFirst(callback)
{
    console.log("Executing current function...");
    console.log("Calling callback function")
    executingLast();//calling callback function
    /**callback function executes when it is invoked, no other script is running until the execution of callback function is completed
     * so it is synchronous
     */
}

function executingLast()
{
    console.log("Executing callback function.");
}
executingFirst(executingLast);