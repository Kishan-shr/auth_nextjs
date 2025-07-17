"use client"
import axios from "axios"
import Link from "next/link"
import React , {useState}  from "react";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function ProfilePage(){
    const router = useRouter()
    const [data , setData] = useState("nothing")
    const Logout = async()=>{
try {
   await axios.get('/api/users/logout')
   toast.success('Logout successful')
   router.push('/login')
} catch (error:any) {
    console.log(error.message);
    toast.error(error.message)
}
    }
    const getUserDetails = async ()=>{
       const  res = await axios.get('api/users/user');
       console.log(res.data);
       setData(res.data.data._id)
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1> Profile</h1>
            <hr />
            <p> Profile Page</p>
            <h2 className="padding rounded bg-green-500 p-1 mb-4">{data === 'nothing' ? "Nothing" :<Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button 
            onClick={Logout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-2xl px-2 py-4 mb-4">Logout</button>
            <button 
            onClick={getUserDetails}
            className="bg-green-500 hover:bg-green-700 text-white font-bold  rounded-2xl px-2 py-4">GetUserDetails</button>
        </div>
    )
}