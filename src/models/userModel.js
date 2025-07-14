import { verify } from "crypto";
import mongoose, { model } from "mongoose";
import { tree } from "next/dist/build/templates/app-page";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:[true, "please provide a email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Please provide a password"]
    },
    isVerified:{
     type:Boolean,
     default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
forgotPasswordToken:String,
forgotPasswordTokenExpiry:Date,
verifyToken:String,
verifyTokenExpiry:Date
})

const User = mongoose.model.users || mongoose.model("users",userSchema);
export default User