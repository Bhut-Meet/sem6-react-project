// import React from 'react'
import {Link} from 'react-router-dom'

export default function ContactUs() {
  return (
    // <div className="flex flex-col px-16 py-12 mt-10 mb-10 mx-auto w-full text-2xl font-medium text-black bg-zinc-100 max-w-[480px]">
    <div className="flex flex-col px-16 py-11 mx-auto w-full text-1xl font-medium text-black bg-zinc-100 max-w-[480px]">
      <div className="mt-2">
        <span className="font-bold">welcome</span>. Please ContactUs
        <br />
      </div>
      <div className="mt-11">Full Name:</div>
      <input type="text" className="mt-2 border-2 border-red-400"  />
      <div className="mt-7">Email id:</div>
      <input type="text"  className="mt-2 border-2 border-red-400" />
      <div className="mt-9">Mobile No:</div>
      <input type="text" className="mt-2 border-2 border-red-400"  />
      <div className="mt-7">Password:</div>
      <input type="text" className="mt-2 border-2 border-red-400"  />
      <div className="mt-7">Massage:</div>
      <div>
        <textarea name="" id="" cols="41" rows="5" className="mt-2 border-2 border-red-400"></textarea>
      </div>
      <div className="justify-center items-center px-32 py-3.5 mt-10 text-white whitespace-nowrap bg-sky-500">
       <Link to="/">Send Massage</Link>
      </div>
    </div>
  );
}

