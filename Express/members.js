const express = require('express');
const router = express.Router();
const members = require('../../Members');
//const uuid = require('uuid');
//get all members
router.get('/',(req,res)=>
{
 res.json(members);
})

//get single members
router.get('/:id',(req,res)=>
{
  const isPresent = members.some(member=>member.id === parseInt(req.params.id));

  if(isPresent)
  res.json(members.filter(member=>member.id === parseInt(req.params.id)));
  else
  res.status(400).json({msg:"Member not found"})
})


//create members
router.post('/',(req,res)=>
{
    const newMember =
    {
        id: req.body.id,
        name : req.body.name,
        email: req.body.email,
        status: 'active',
    }
    if(!newMember.name || !newMember.email)
    return res.status(400).json({msg: "Please include both name and email."});
    members.push(newMember);
    res.json((members));
});

//update members
router.put('/:id',(req,res)=>
{
    const isPresent = members.some(member=>member.id === parseInt(req.params.id));

  if(isPresent)
  {
  const updateMember = req.body;
  members.forEach(member => 
    {
        if(member.id = parseInt(req.params.id))
        member.name =updateMember.name?updateMember.name: member.name;
        member.email = updateMember.email?updateMember.email: member.email;
        res.json({msg: "Members was updated",member});
    });
  }
  else
  res.status(400).json({msg:`Member not found with id ${req.params.id}`});
})

//delete member
router.delete('/:id',(req,res)=>
{
  const isPresent = members.some(member=>member.id === parseInt(req.params.id));

  if(isPresent)
  {
      res.json
      ({
          msg : "member deleted",
       members : members.filter(member=>member.id !== parseInt(req.params.id))
      });
      }  else
  res.status(400).json({msg:"Member not found"})
})


module.exports = router;