const express=require("express");
const { Quiz } = require("../model/quz.modele");

const quzRouter=express.Router();

quzRouter.post('/quizzes', async (req, res) => {
    try {
      const quizData = req.body.quiz;
      const quiz = new Quiz(quizData);
      await quiz.save();
      res.json({ message: 'Quiz created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create quiz' });
    }
  });

//all 
quzRouter.get('/quizzes', async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.json(quizzes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve quizzes' });
    }
  });
  
  // Read a single quiz
  quzRouter.get('/quizzes/:id', async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id);
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json(quiz);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve quiz' });
    }
  });
  
  // Update a quiz
  quzRouter.put('/quizzes/:id', async (req, res) => {
    try {
      const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body.quiz, { new: true });
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json({ message: 'Quiz updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update quiz' });
    }
  });
  
  // Delete a quiz
  quzRouter.delete('/quizzes/:id', async (req, res) => {
    try {
      const quiz = await Quiz.findByIdAndDelete(req.params.id);
      if (!quiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      res.json({ message: 'Quiz deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete quiz' });
    }
  });








module.exports={
    quzRouter
}