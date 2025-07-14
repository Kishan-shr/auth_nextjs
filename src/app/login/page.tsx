"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"
import { Axios } from "axios"
export default function loginPage(){
    const [user,setUser] = React.useState({
        email:"",
        password:""
     
    })
    const onLogin = async ()=>{

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen min-h-screen py-2">
        <h1 className="text-center text-white text-2xl">Login</h1>
        <hr /> 
       <label htmlFor="email">email</label>
        <input type="email" id="email" value={user.email} 
        onChange={(e)=>setUser({...user , email:e.target.value})}
        placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input type="password" id="password" value={user.password} 
        onChange={(e)=>setUser({...user , password:e.target.value})}
        placeholder="password"
        />
        <button onClick={onLogin} type="submit"  className="p-2 mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login</button>
        <Link href="/signup">Signup here</Link>
        </div>
    )
}