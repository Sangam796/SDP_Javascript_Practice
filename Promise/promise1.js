//implementing callback4 program using promise
const students =[
    { name : "Sangam" ,subject : "javascript"},
    {name : "Sandesh", subject: "java"}
    ]
    
    function enrollStudents(student)//first adding the student in the list and then reading the list
    {
        return new Promise(function(resolve,reject)
        {
            setTimeout(function()
            {
                const error = false;
                students.push(student);
                if(!error)
                {
                resolve();
                }
                else
                {
                    reject();
                }
            }, 3000);
        })
       
        
    }
    
    function readStudents()
    {
        setTimeout(function()
            {
                
                students.forEach(function(student)
                {
                    console.log(student.name);
                })
    
            },1000);
    
    }
    
    let newStudent = {name: "Sunny", subject:"python"};
    enrollStudents(newStudent).then(function()
    {
        readStudents();
    }).catch(function()
    {
        console.log("Error occured");
    });
    