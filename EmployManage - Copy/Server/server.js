const express = require("express");
const app = express();
const mongoose =  require("mongoose");
const bodyParser = require('body-parser');
const dotenv= require("dotenv");
const connectDB = require('./db');



//load Config
//dotenv.config({path:'./config.env'});
connectDB();

//Routes
//app.use('/',require('./routes/index'));
const {Employee} =require('./models/emplyee');
const e = require("express");
app.use(express.json());

app.get('/employee',async(req,res)=>{
     try {
        const employee = await Employee.find({});
        res.status(200).json(employee);
     } catch (error) {
        res.status(500).json(err);
     }
});

app.post('/employee', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (error) {
    console.error('Failed to create book:', error);
    res.status(500).json({ error: 'Failed to create book' });
  }
});

app.put('/employee/:id',async(req,res)=>{
  try{
    const {id} = req.params;
    const employee = await Employee.findByIdAndUpdate(id,req.body);
    //we cannot find any employee in database
    if(!employee){
      return res.status(404).json({message:`cannot find any product with Id ${id}`})
    }
    const updatedemployee =await Employee.findById(id);
    res.status(200).json(updatedemployee);
  }catch(error){
    res.status(500).json({massage:error.massage})
  }

});

app.delete('/employee/:id', async(req,res)=>{
  try {
    const {id} = req.params;
    const employee = await Employee.findByIdAndDelete(id,req.body);
    //we cannot find any employee in database
    if(!employee){
      return res.status(404).json({message:`cannot find a employee with ID ${id}`})
    }
    res.status(200).json(employee);
  } catch(error) {
  res.status(500).json({message:error.message})
    
  }
});



 app.listen(5000,()=>{
        console.log('app connect to the port');
    });