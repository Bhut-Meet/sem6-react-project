// import React from "react"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"




export default function LoginForm() {

  const [email,setEmail]=useState()
  const [pass,setPass]=useState()
  const navigate = useNavigate()


      const LoginSubmit = (e) => {
          e.preventDefault()
          axios.post('http://localhost:3001/Login',{email,pass})
          .then(result => {console.log(result)
              if(result.data === "success"){
                  navigate("/");
                  
              }
              else{
                alert("You Enter a incrrect Data")
              }
          })
          .catch(err => console.log(err))
        }







  return (
    <div className="bg-slate-600 p-10">
    <div>
        <div className="flex flex-col items-center mt-10">
            {/* <div className=" px-16 py-11 text-1xl font-medium text-black bg-zinc-100 "> */}
            <div className=" flex flex-col px-16 py-11 mx-auto w-full text-1xl font-medium text-black bg-zinc-100 max-w-[480px]">
      <div>
        <span className="font-bold">welcome</span>. Please login.
      </div>
      <form onSubmit={LoginSubmit}>
      <div className="mt-5">Email ID:</div>
      {/* <div className="shrink-0 mt-5 bg-neutral-200 h-[40px]" /> */}
      <input type="text" className="mt-2 border-2 border-red-400 w-full" onChange={(e)=>setEmail(e.target.value)}/>
      <div className="mt-5">Password:</div>
      {/* <div className="shrink-0 mt-5 bg-neutral-200 h-[40px]" /> */}
      <input type="text" className="mt-2 border-2 border-red-400 w-full" onChange={(e)=>setPass(e.target.value)} />
      <div className="mt-5 text-base">Forgot Password?</div>
      <div className="justify-center items-center px-36 py-2 mt-6 text-white  bg-sky-500">
        <button>Login</button>
      </div>
      <div className="mt-5 text-base">New user?click Here for</div><br />
      <div className="justify-center items-center px-36 py-2 mt-6 text-white w bg-sky-500">
      <Link  to="/Reg">SignUp</Link>
      </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}
