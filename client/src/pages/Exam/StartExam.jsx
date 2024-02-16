import React from 'react'
import {Link} from 'react-router-dom'

export default function StartExam() {
  return (
    <div>


<div className="flex flex-col mb-44 px-10 text-2xl font-semibold text-black">
      <div className="w-full max-md:max-w-full mt-5">
        Please tack a look on below points before starting exam:
      </div>
      <div className="mt-5 w-full bg-black min-h-[1px] max-md:max-w-full" />
      <div className="mt-9 w-full max-md:mt-10 max-md:max-w-full">
        <ul className='list-disc'>
        <li> Make sure that you have read all the Rules.</li>
        {/* <br /> */}
        <li>Before Giving Exam you should Practice for the parvular subjects.</li>
        
        <li>The certificate of exam is free but out of 20 you should get atleast 15 marks</li>
        
        <li>There is no negative marking</li>
        
        <li>All questions are Compulsary</li>
        </ul>
        <br />
        <Link className='bg-blue-500 hover:bg-blue-700 text-white font-mono py-1 px-4  rounded' to='/Exam' >Start Exam</Link>
      </div>
      {/* <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded'> */}
      {/* </div> */}
    </div>


    </div>
  )
}
