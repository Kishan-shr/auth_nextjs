import { error } from "console";
import mongoose from "mongoose";
export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('mongoDb connected sucessfully')
        })
        connection.on('error',(err)=>{
            console.log('mongodb connection error please make sure mongoDB is running.'+error)
            process.exit();
        })
    } catch (error) {
        console.log('Something goes wrong')
        console.log(error)
    }
}