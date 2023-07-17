
  const mongoose=require("mongoose");
require("dotenv").config();

const schema=new mongoose.Schema({
   
    username: String,
    email: String,
  
})


const User=mongoose.model("user",schema);



module.exports={User}