import mongoose from 'mongoose';
const DataSchema=new mongoose.Schema({
    "title":String,
    "completed":Boolean
})
 const Todo=mongoose.model("Data",DataSchema);
 export default Todo;