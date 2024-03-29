const express=require("express")
const app=require("./app")
const mongoose=require("mongoose")
var cors=require('cors');
const cloudinary=require('cloudinary')
const dotenv=require("dotenv")

dotenv.config()

app.use(cors());

app.use(express.json())

//Using cloudinary to store images
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
  api_key:  process.env.API_KEY,
  api_secret:   process.env.API_SECRET,
})

//MongoDB connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err.message);
});


app.listen(process.env.PORT,()=>{
    console.log(`Server started at port ${process.env.PORT}`)
})