let chai = require("chai");
let chaiHTTP =require("chai-http");
const { response } = require("express");
let server = require("../index1");

//assertion style
chai.should();

chai.use(chaiHTTP);

describe('Testing Get API',()=>
{
    // Get route
    describe("GET api/user", ()=>
    {
        it("It should get all the documents from the student",async()=>
        {
           const response = await chai.request(server)
            .get("/user");
            response.should.have.status(200);
            response.should.be.an("object");
            response.body.forEach(doc=>{
                doc.should.have.property('name');
                doc.should.have.property('course');
                doc.should.have.property('yearOfGraduation');
            })
            
        })

        //test for wrong url
        it("It should send 404 response status",async()=>
        {
           const response = await chai.request(server)
            .get("/api/user");
            response.should.have.status(404);
        })
    });

        // Get (by _id) route
        describe("Testing Get (by _id) API", ()=>
        {
            it("It should get the document with given id",async()=>
            {
                const response = await chai.request(server)
                .get("/user/1");
                response.should.have.status(200);
                response.should.be.an("object");
                response.body.should.have.property('name');
                response.body.should.have.property('course');
                response.body.should.have.property('yearOfGraduation');
            })

            it.skip("send 404 response status as document with given id is not present",async()=>
            {
                const response = await chai.request(server)
                .get("/user/19");
                response.should.have.status(404);
            })
        });


    //Testing Post route
        describe("Testing POST Route", ()=>
        {
            it.skip("It should insert the details of student as a document", async()=>
            {
                const response = await chai.request(server)
                .post("/user") 
                .send([{
                    _id : 10,
                    name: "Sangam",
                    course : "CSE",
                    yearOfGraduation : "2022"
                }]);
                response.should.have.status(201);
                response.should.be.an("Object");
            })  
        })

        
    //Testing PUT route
    describe("Testing PUT Route", ()=>
    {
        it.skip("It should update the details of student with given id", async()=>
        {
            const response = await chai.request(server)
            .put("/user/10") 
            .send({
                country : "Nepal"
            });
            response.should.have.status(201);
            response.should.be.an("Object");
        })
        
        it.skip("It should give 406 response status as _id is not available", async()=>
        {
            const response = await chai.request(server)
            .put("/user/12") 
            .send({
                country : "Nepal"
            });
            response.should.have.status(406);

        })  
    })

    //Testing DELETE route
    describe("Testing Delete API",()=>
    {
        it.skip("Deleting document with given id",async ()=>{
            const response = await chai.request(server)
            .delete("/user/11");
            response.should.have.status(200);
        })

        it.skip("document with given id is not available to delete",async ()=>{
            const response = await chai.request(server)
            .delete("/user/12");
            response.should.have.status(404);
        })
    })

})
    
    
    


