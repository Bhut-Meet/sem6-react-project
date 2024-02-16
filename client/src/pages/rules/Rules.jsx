// import React from 'react'

export default function Rules() {
  return (
    <div className="flex flex-col mb-14 px-10 text-2xl font-semibold text-black">
      <div className="w-full max-md:max-w-full">
        Rules for Practice and Exam:
      </div>
      <div className="mt-9 w-full bg-black min-h-[1px] max-md:max-w-full" />
      <div className="mt-9 w-full max-md:mt-10 max-md:max-w-full">
        Exam:
        <br />
        <ul className='list-disc'>
        <li>Before Starting Exam you should see our Syllabus</li>
        {/* <br /> */}
        <li>There is no negative marking</li>
        
        <li>All questions are Compulsary</li>
        
        <li>If you have more than 12 right answers out of 20 than only you will get
        certificate</li>
        
        <li>There is no extra charge for certificate</li>
        <br />
        Practice:
        
        <li>Before Starting Prctice you should see our Syllabus</li>
        
       <li> There is no negative marking</li>
        
        <li>All questions are Compulsary</li>
        
        </ul>
      </div>
    </div>
  );
}
