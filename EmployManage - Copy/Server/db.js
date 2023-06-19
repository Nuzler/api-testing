const mongoose= require('mongoose');


const connectDB = async ()=>{
   
   await mongoose.connect('mongodb+srv://Admin:admin123@cluster0.ci2vash.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Mongo DB Connected`);

}
module.exports=connectDB;