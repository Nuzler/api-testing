const express = require('express');
const router = express.Router();

const {Employee}=require('../models/emplyee');

//Get All Employee
router.get('/api/employees',async(req,res)=>{
    await Employee.find({},(err,data)=>{
        if(!err){
            res.send(data);
        }
    });
});

module.exports = router;