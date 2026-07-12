import express from 'express';
import mongoose from 'mongoose';
import Todo from './models/data.js';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());// Middleware to parse JSON bodies
const PORT = 3000;
await mongoose.connect("mongodb://localhost:27017/todoapp")

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/post',async(req,res)=>{
    const todo=new Todo(req.body);
    await todo.save();
    console.log(todo);
    res.json(todo);
})
app.get('/get/:id',async(req,res)=>{
    const todo1=await Todo.findById(
        // _id:req.query.id
        req.params.id
    )
    // res.send({
    //     title:todo1.title,
    //     completed:todo1.completed
    // })
    console.log(todo1);
    res.json(todo1);
})
app.get('/get',async(req,res)=>{
    const todo4=await Todo.find();//
    res.json(todo4);
})
app.put('/put',async(req,res)=>{
    // const todo3=await Todo.findByIdAndUpdate(req.body.id,{
    //     title:req.body.title,
    //     completed:req.body.completed
    // })
    // res.send("Data updated successfully");
     const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        {
            completed: req.body.completed
        },
        { new: true }
    );

    res.json(todo);
})
app.put('/put/:id',async(req,res)=>{
    const todo=await Todo.findByIdAndUpdate(
        req.params.id,{
            completed:req.body.completed
        },
        {
            new:true
        }
    );
    console.log(todo);
    res.json(todo);
})
app.delete('/delete/:id',async(req,res)=>{
    const todo2=await Todo.findByIdAndDelete(req.params.id);
    res.send("Data deleted successfully");
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
