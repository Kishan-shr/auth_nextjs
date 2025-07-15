import {connect} from "@/app/dbConfig/dbconfig"
import User from "@/models/userModel"
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { error } from "console";
connect()
export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        console.log(reqBody)
        //check if user exists
      const user = await User.findOne({email})
      if(!user){
        return NextResponse.json({error:"User does not exist"},{status:400})
      }
    } catch (error) {
        return NextResponse.json({error: error.message},{status:500})
    }
}