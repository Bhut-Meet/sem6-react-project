// import React from 'react'
// import Footer from './pages/Footer';
// import Header from './pages/Header';
// import 'bootstrap/dist/css/bootstrap. css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Link } from "react-router-dom";

export default function Home() {
  const now=100;
  return (
    <>
    <div className="flex flex-col bg-white">
      {/* <div className="flex overflow-hidden relative flex-col gap-5   bg-black justify-between items-start py-12 w-full min-h-[470px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col self-start mt-5 max-md:max-w-full">
          <div className="max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-9/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start mt-6 font-medium text-white max-md:mt-10 max-md:max-w-full">
                  <div className="ml-28 text-4xl max-md:ml-2.5">
                    What is Java?
                  </div>
                  <div className="flex gap-5 justify-between self-stretch mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="justify-center self-start px-5 py-6 mt-2.5 text-6xl whitespace-nowrap bg-black max-md:pr-5 max-md:text-4xl">
                      &lt;
                    </div>
                    <div className="flex-auto text-xl max-md:max-w-full">
                      Java is a general-purpose computer programming
                      <br /> language that is concurrent, class-based,
                      object-oriented, <br />
                      and specifically designed to have as few implementation{" "}
                      <br />
                      dependencies as possible. It is intended to let
                      application <br />
                      developers &quot;write once, run anywhere&quot; (WORA)
                    </div>
                  </div>
                  <div className="justify-center px-7 py-4 mt-7 ml-28 text-2xl bg-sky-600 max-md:px-5 max-md:ml-2.5">
                    Read More
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="max-w-full aspect-square w-[259px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between self-end px-5 max-w-full w-[520px] max-md:flex-wrap">
            <div className="flex-1 shrink-0 rounded-full h-[45px]" />
            <div className="flex-1 shrink-0 rounded-full h-[45px]" />
            <div className="flex-1 shrink-0 rounded-full h-[45px]" />
            <div className="flex-1 shrink-0 rounded-full h-[45px]" />
            <div className="flex-1 shrink-0 rounded-full h-[45px]" />
            <div className="flex-1 shrink-0 rounded-full h-[45px]" />
          </div>
        </div>
        <div className="relative justify-center py-6 pr-11 pl-3 my-auto text-6xl font-medium text-white whitespace-nowrap bg-black max-md:pr-5 max-md:text-4xl">
          &lt;
        </div>
      </div> */}
      <div className="flex flex-col px-14 mt-8 w-full max-md:px-5 max-md:max-w-full">
        <div className="text-2xl text-black max-md:max-w-full">
          {/* What should you know before starting Practice and Exam? */}
        </div>
        <div className="mt-7 ml-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Link to="/C" className="flex flex-col pt-5 pr-20 pb-12 pl-3.5 w-full text-2xl text-black bg-white border border-black border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-start">C Programming</div>
                <img
                  loading="lazy"
                  src='./src/assets/C 2.png'
                  className="self-center mt-16 max-w-full aspect-square w-[300px] max-md:mt-10"
                />
              </Link>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Link to="/Cplusepluse"  className="flex flex-col pt-5 pr-20 pb-12 pl-6 w-full text-2xl text-black whitespace-nowrap bg-white border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-start">C++</div>
                <img
                  loading="lazy"
                  src='./src/assets/Cpp.png'
                  className="self-center mt-24 max-w-full aspect-square w-[270px] max-md:mt-10"
                />
              </Link>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Link to="/Java" className="flex flex-col pt-5 pr-12 pb-12 pl-5 w-full text-2xl text-black whitespace-nowrap bg-white border border-black border-solid max-md:pr-5 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">Java</div>
                <img
                  loading="lazy"
                  src='./src/assets/java.png'
                  className="self-end mt-10 max-w-full aspect-square w-[325px] max-md:mt-10"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20 ml-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Link to="/JavaScript" className="flex flex-col pt-7 pr-20 pb-12 pl-9 w-full text-2xl text-black whitespace-nowrap bg-white border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-start">JavaScript</div>
                <img
                  loading="lazy"
                  src='./src/assets/javascript.png'
                  className="self-center mt-20 max-w-full aspect-square w-[225px] max-md:mt-10"
                />
              </Link>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Link to="/Mysql" className="flex flex-col pt-7 pr-20 pb-12 pl-10 w-full text-2xl text-black whitespace-nowrap bg-white border border-black border-solid max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="self-start">MySQL</div>
                <img
                  loading="lazy"
                  src='./src/assets/MySQL.png'
                  className="self-center mt-24 max-w-full aspect-square w-[200px] max-md:mt-10"
                />
              </Link>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Link to="/CSharp" className="flex flex-col px-3.5 pt-7 pb-12 w-full text-2xl text-black whitespace-nowrap bg-white border border-black border-solid max-md:mt-10 max-md:max-w-full">
                <div className="self-start ml-6 max-md:ml-2.5">C#</div>
                <img
                  loading="lazy"
                  src='./src/assets/CSharp.png'
                  className="mt-4 w-full aspect-[1.45] max-md:max-w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 mt-20 w-full bg-neutral-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mb-12 max-w-full w-[1013px] max-md:mb-10">
          <div className="self-center text-3xl text-white max-md:max-w-full">
            Use of Programming and Scripting languages in present Time
          </div>
          <div className="mt-20 text-2xl text-white max-md:mt-10 max-md:max-w-full">
          <div className="mb-5 text-2xl  dark:text-white">Java Script</div>
          <progress style={{width:"100%",height:"15px"}} value={0.7} />
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center items-center self-center pr-12 mt-6 w-full min-h-[25px] stroke-[25px] stroke-white max-md:pr-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d69ebbc057813c95b14f991c6ff9ed4defd171cba1641662a34eb44d90cff867?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4d3e05040587e5d86f534618139af89e203417a01191c73268e8035bd2b0a60?"
              className="w-full aspect-[33.33] stroke-[25px] stroke-yellow-300 max-md:max-w-full"
            />
          </div>
          <div className="mt-7 mb-5 text-2xl text-white max-md:max-w-full">
            Python
          </div>
          <progress style={{width:"100%"}} value={0.9} />
          <div className="flex overflow-hidden relative flex-col justify-center items-start self-center pr-16 mt-7 w-full min-h-[25px] stroke-[25px] stroke-white max-md:pr-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d69ebbc057813c95b14f991c6ff9ed4defd171cba1641662a34eb44d90cff867?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb11f2244c40d80989fcb4ad0703a8bd00cceb5855c7f1ac38f331625de24dd?"
              className="max-w-full aspect-[12.5] stroke-[25px] stroke-green-700 w-[313px]"
            />
          </div>
          <div className="mt-7 text-2xl text-white max-md:max-w-full">Java</div>
          <progress style={{width:"100%"}} value={0.5} />
          <div className="mt-24 mb-5 text-2xl text-white max-md:mt-10 max-md:max-w-full">
            C#
          </div>
          <progress style={{width:"100%"}} value={0.7} />
          <div className="flex overflow-hidden relative flex-col justify-center items-start self-center pr-16 mt-7 w-full min-h-[25px] stroke-[25px] stroke-white max-md:pr-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d69ebbc057813c95b14f991c6ff9ed4defd171cba1641662a34eb44d90cff867?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f709f35ac08a16f2770f55ab735927ea26c63a5b2ce5f3723f138fd43ff79164?"
              className="max-w-full aspect-[4.55] stroke-[25px] stroke-yellow-300 w-[113px]"
            />
          </div>
          <div className="mt-7  mb-5 text-2xl text-white max-md:max-w-full">PHP</div>
          <progress style={{width:"100%"}} value={0.6} />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19893fc067dfc0ff13f007adbe748acdd4c343b09625d7ff07d9a55cc6096d6e?"
            className="mt-6 aspect-[3.7] stroke-[25px] stroke-green-700 w-[93px]"
          />
          <div className="mt-8 mb-5 text-2xl text-white max-md:max-w-full">
            TypeScript
          </div>
          {/* <ProgressBar variant="danger" now={now} label={`${now}%`} ></ProgressBar> */}
          <progress style={{width:"100%"}} value={0.8} />
          {/* <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-red-600 h-2.5 rounded-full dark:bg-gray-300" ></div>
          </div> */}
          <div className="flex overflow-hidden relative flex-col justify-center items-start self-center pr-16 mt-5 w-full min-h-[25px] stroke-[25px] stroke-white max-md:pr-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d69ebbc057813c95b14f991c6ff9ed4defd171cba1641662a34eb44d90cff867?"
              className="object-cover absolute inset-0 size-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/82f86589c5127313914f02f871cff15bd9ba601094cd30b4f361cf0e43d3496d?"
              className="aspect-[2.5] stroke-[25px] stroke-sky-600 w-[63px]"
            />
          </div>
        </div>
      </div>
      <div className="self-center px-5 mt-7 mb-10 w-full max-w-[1614px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl text-black max-md:mt-10">
              <div>About Us</div>
              <img
                loading="lazy"
                src='./src/assets/my_pic 3.png'
                className="mt-7 max-w-full aspect-square w-[150px]"
              />
              <div className="mt-7">
                Currently we are student <br />
                and hosting OnlineExamPortal.com <br />
                website
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl text-black max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">Our vision</div>
              <img
                loading="lazy"
                src='./src/assets/vision 2.png'
                className="mt-9 max-w-full aspect-square w-[150px]"
              />
              <div className="mt-4 max-md:max-w-full">
                To provide you a platform where <br />
                you can enhance your <br />
                programmming skills <br />
                <br />
                To make you comfortable with <br />
                languages by knowing their <br />
                different kinds of Questions
                <br />
                <br />
                To Certifed you in your knlowledged <br />
                programming language
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl text-black max-md:mt-10">
              <div>Contact us</div>
              <img
                loading="lazy"
                src='./src/assets/contactus 2.png'
                className="mt-6 max-w-full aspect-square w-[150px]"
              />
              <div className="mt-7">
                student@gmail.com
                <br />
                www.OnlineExamPortal.tk
                <br />
                91-7201973916
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-2xl text-black max-md:mt-10">
              <div>Comming Soon</div>
              <img
                loading="lazy"
                src='./src/assets/coming soon 2.png'
                className="mt-5 max-w-full aspect-square w-[150px]"
              />
              <div className="mt-7">
                We re comming with more languages like RUBY
                <br />
                We always keep update the questons so you can get more Idea
                about questoins
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
     {/* <Footer></Footer> */}
    </div>
    </>
  );
}
