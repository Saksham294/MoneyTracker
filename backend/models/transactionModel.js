const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const dotenv=require("dotenv")

dotenv.config()

//Creating a transaction schema
const transactionSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    amount:{
        type:Number,
    },
    category:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    isReceived:{
        type:Boolean,
        default:false,
    },
})



module.exports=mongoose.model("Transaction",transactionSchema)