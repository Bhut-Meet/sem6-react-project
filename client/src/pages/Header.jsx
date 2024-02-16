// import React from 'react'
export default function Header() {
  return (
    <>
    <div className="flex justify-center items-center px-10 py-3 w-full bg-sky-600 max-md:px-5 max-md:max-w-full">
        {/* <div className="flex gap-5 justify-between w-full max-w-[1263px] max-md:flex-wrap max-md:max-w-full"> */}
          {/* <div className="flex gap-5 justify-between text-3xl font-bold text-black"> */}
            <img
              loading="lazy"
              src='./src/assets/logo 2.png'
              className="aspect-square w-[30px]"
            />
            <div className="flex-auto self-end ml-3">Online Exam Portal</div>
          {/* </div> */}
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd4fd63cf96ccae2c93af26935d05f50bd0362edbdb6fdc3c32b81c85c3bc130?"
              className="aspect-square w-[25px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/33a7390144d2d2a4a6349c5c88a1651e2025a838d3550a3b716007a223d51192?"
              className="aspect-square w-[25px]"
            />
          </div>
        {/* </div> */}
      </div>
      <div className="flex flex-col justify-center items-end px-16 py-0 w-full text-1xl font-medium text-white whitespace-nowrap bg-neutral-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center mt-2 mr-32 mb-2.5 max-w-full w-[700px] max-md:flex-wrap max-md:mr-2.5">
          <a  href="/">Home</a>
          {/* <div className="flex gap-1 justify-between self-stretch my-auto max-md:flex-wrap max-md:max-w-full"> */}
            <a  href="/NavbarPractice">Practice</a>
            <a  href="/StartExam">Exam</a>
            <a  href="/Rules">Rules</a>
            <a  href="/ContactUs">ContactUs</a>
          {/* </div> */}
          <div className="justify-center self-stretch px-9 py-3 bg-sky-600 max-md:px-5">
          <a href="/Reg">SignUp</a>
          </div>
        </div>
      </div>
      </>
  )
}
