// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function Reg() {



  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [num,setNum]=useState()
  const [pass,setPass]=useState()
  const navigate = useNavigate()

  const RegistrationSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/',{name,email,num,pass})
    .then(result => {console.log(result)
      navigate("/Login")
    })
    .catch(err => console.log(err))
  }





  return (
    <div className="bg-slate-600 p-10">
    <div className="flex flex-col px-16 py-11 mx-auto w-full text-1xl font-medium text-black bg-zinc-100 max-w-[480px]">
      <div className="mt-2">
        <span className="font-bold">welcome</span>. Please Enter the following
        details.
        <br />
        <br />
      </div>
      <form onSubmit={RegistrationSubmit}>
      <div className="mt-1 mb-1">Full Name:</div>
      <input type="text" className="mt-2 border-2 border-red-400 w-full" onChange={(e)=> setName(e.target.value)}/>
      <div className="mt-6 mb-1">Email id:</div>
      <input type="email" className="mt-2 border-2 border-red-400 w-full"  onChange={(e)=> setEmail(e.target.value)}/>
      <div className="mt-6 mb-1">Mobile No:</div>
      <input type="text" className="mt-2 border-2 border-red-400 w-full" onChange={(e)=> setNum(e.target.value)} />
      <div className="mt-6 mb-1">Password:</div>
      <input type="text" className="mt-2 border-2 border-red-400 w-full" onChange={(e)=> setPass(e.target.value)} />
      {/* <div className="mt-6 mb-1 whitespace-nowrap">Conform Password:</div> */}
      {/* <input type="text" className="mt-2 border-2 border-red-400"  onChange={(e)=> setName(e.target.value)}/> */}
      {/* <div className="justify-center items-center px-16 py-3.5 mt-20 text-white whitespace-nowrap bg-sky-500"> */}
      <div className="justify-center items-center px-36 py-2 mt-6 text-white  bg-sky-500">
       <button>SignUp</button>
      </div>
      <div className="justify-center items-center px-32 py-2 mt-6 text-white  bg-sky-500">
       <Link  to="/Login">Admin Login</Link>
      </div>
      </form>
    </div>
    </div>
  );
}

