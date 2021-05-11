const students =[
{ name : "Sangam" ,subject : "javascript"},
{name : "Sandesh", subject: "java"}
]

function enrollStudents(student,callback)//first adding the student in the list and then reading the list
{
    setTimeout(function()
    {
        students.push(student);
        callback();
    }, 3000);
    
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
enrollStudents(newStudent,readStudents);
