"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import  axios  from "axios"
import toast from "react-hot-toast"
export default function signupPage(){
    const router = useRouter()
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:""       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    const [loading, setLoading]= React.useState(false)
    const onSignup = async ()=>{
try {
    setLoading(true);
    const response = await axios.post("api/users/signup",user);
    console.log("signup success",response.data);
    router.push("/login");
} catch (error:any) {
    console.log("Signup failed",error.message)
    toast.error(error.message);
} finally{
    setLoading(false)
}
    }
    useEffect(()=>{
        if(user.email.length >0 && user.password.length >0 && user.username.length >0){
        setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    })
    return(
        <div className="flex flex-col items-center justify-center min-h-screen min-h-screen py-2">
        <h1 className="text-center text-white text-2xl mb-2">{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input type="text" id="username" value={user.username} 
        onChange={(e)=>setUser({...user , username:e.target.value})}
        placeholder="username"
        />
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
        <button onClick={onSignup} type="submit"   className="p-2 mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
        <Link href="/login">Visit login page</Link>
        </div>
    )
}