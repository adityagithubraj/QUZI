
  const mongoose=require("mongoose");
  require("dotenv").config();
  
  
     
    const quizSchema = new mongoose.Schema({
        creator: String,
        title: String,
        description: String,
        questions: [{
          title: String,
          answerOptions: [String],
          correctOptions: [Number],
        }],
        leaderboard: [{
            email: String,
            score: Number,
          }],
      });
    

  
  
  const Quiz=mongoose.model("quiz",quizSchema);
  
  
  
  module.exports={Quiz}