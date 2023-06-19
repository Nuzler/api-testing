const mongoose = require('mongoose');

//Employee Schema

const employeeSchema = new mongoose.Schema({
    firstName: String,
     LastName: String,
     EmailAddress:String,
     PhoneNumber:String,
     Gender: String
  });

  // Define a Mongoose model
const Employee = mongoose.model('Employee', employeeSchema);


module.exports={Employee}