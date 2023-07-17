const express=require("express");
const { User } = require("../model/user.modle");

const userRouter=express.Router();

///
userRouter.post("/register",async(req,res)=>{
    const {email,username}=req.body
    try {
        let isUser=await User.findOne({email})
        if(isUser){
            res.status(201).send({msg:`Welcome ${username}`})
            return
        }
    
        let user=new User({email,username})

        await user.save()    
        res.status(201).send({msg:`Welcome ${username}`})

    } catch (error) {
        console.log(error)
        res.status(501).send({msg:"Server Error",error:error.message})
        
    }
})

  module.exports={
    userRouter
}