// import React from 'react'
import {Link} from "react-router-dom"

export default function NavbarPractice() {
  return (
    <>
    <div className="bg-neutral-200 m-5">
        <div className="grid grid-rows-3 grid-flow-col gap-5 p-5 ">
                  <div className=" shadow-md p-5  bg-white">
                    <div className="flex">
                      <div className="flex-none w-9/12"><img src="../../src/assets/C 2.png" className="w-10" alt="" /></div>
                      {/* <button>Practice Now</button> */}
                      <Link to="/C">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Practice Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className=" shadow-md p-5 bg-white ">
                    <div className="flex">
                      <div className="flex-none  w-9/12"><img src="../../src/assets/Javascript.png" className="w-10" alt="" /></div>
                      <Link to="/JavaScript">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Practice Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className=" shadow-md p-5 bg-white ">
                    <div className="flex">
                      <div className="flex-none  w-9/12"><img src="../../src/assets/Cpp.png" className="w-10" alt="" /></div>
                      <Link to="/Cplusepluse">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Practice Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className=" shadow-md p-5  bg-white">
                    <div className="flex">
                      <div className="flex-none  w-9/12"><img src="../../src/assets/MySql.png" className="w-10" alt="" /></div>
                      <Link to="/Mysql">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Practice Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className=" shadow-md p-5  bg-white">
                    <div className="flex">
                      <div className="flex-none w-9/12"><img src="../../src/assets/Java.png" className="w-10" alt="" /></div>
                      <Link to="/Java">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Practice Now</button>
                      </Link>
                    </div>
                  </div>
                  <div className=" shadow-md p-5  bg-white">
                    <div className="flex">
                      <div className="flex-none w-9/12"><img src="../../src/assets/CSharp.png" className="w-10" alt="" /></div>
                      <Link to="/Csharp">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Practice Now</button>
                      </Link>
                    </div>
                  </div>
        </div>
      </div>
    </>
  )
}
