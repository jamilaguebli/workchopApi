const mongoose=require("mongoose")
const User = require("../models/schema")




const controller ={
 get:async(req,res)=>{
 const users=await User.find()
 res.send(users)
 },

 add:(req,res)=>{
    User.create(req.body)
    res.send("addd")},

 update:async(req,res)=>{
   await User.findOneAndUpdate({ _id :  req.body._id })
              res.send('user update')
  },
  delete:async(req,res)=>{
   await  User.findOneAndDelete({_id :  req.body._id})
    res.send('user delete')
  }
   
}
module.exports=controller