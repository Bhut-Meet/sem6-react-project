// import React from 'react'

import { useState } from "react"
import { Link } from "react-router-dom"

export default function Questions() {


    let Questionbank=[
        {
            Question:"What is the output of the following code snippet?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\\n\", x++);\n    printf(\"%d\\n\", x);\n    printf(\"%d\\n\", ++x);\n    return 0;\n}",
            AnswerText:[
                {Answer:"5 6 7",isCorrect:true},
                {Answer:"5 6 6",isCorrect:false},
                {Answer:"5 7 7",isCorrect:false},
                {Answer:"6 7 7",isCorrect:false}
            ]
        },
        {
            Question:"Which operator is used to access the value stored at a memory address in C?",
            AnswerText:[
                {Answer:"*",isCorrect:true},
                {Answer:"&",isCorrect:false},
                {Answer:"->",isCorrect:false},
                {Answer:".",isCorrect:false}
            ]
        },
        {
            Question:"What is the output of the following code snippet?\n\n#include <iostream>\nint main() {\n    int x = 5;\n    std::cout << x++ << x << ++x;\n    return 0;\n}",
            AnswerText:[
                {Answer:"576",isCorrect:true},
                {Answer:"557",isCorrect:false},
                {Answer:"555",isCorrect:false},
                {Answer:"657",isCorrect:false}
            ]
        },
        {
            Question:"What is the output of the following code snippet?\n\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++ + ++x);\n    }\n}",
            AnswerText:[
                {Answer:"12",isCorrect:true},
                {Answer:"10",isCorrect:false},
                {Answer:"13",isCorrect:false},
                {Answer:"12",isCorrect:false}
            ]
        },
        {
            Question:"What is the correct way to write a JavaScript array?",
            AnswerText:[
                {Answer:"[1, 2, 3]",isCorrect:true},
                {Answer:"{1, 2, 3}",isCorrect:false},
                {Answer: "(1, 2, 3)",isCorrect:false},
                {Answer:"<1, 2, 3>",isCorrect:false}
            ]
        },
        {
            Question:"What keyword is used to select data from a MySQL database?",
            AnswerText:[
                {Answer:"SELECT",isCorrect:true},
                {Answer:"PICK",isCorrect:false},
                {Answer:"GET",isCorrect:false},
                {Answer:"FETCH",isCorrect:false}
            ]
        },
        {
            Question:"What is the default port number for MySQL?",
            AnswerText:[
                {Answer:"3306",isCorrect:true},
                {Answer:"8080",isCorrect:false},
                {Answer:"5432",isCorrect:false},
                {Answer:"27017",isCorrect:false}
            ]
        },
        {
            Question:"Which keyword is used to declare a class in C#?",
            AnswerText:[
                {Answer:"class",isCorrect:true},
                {Answer:"struct",isCorrect:false},
                {Answer:"interface",isCorrect:false},
                {Answer:"void",isCorrect:false}
            ]
        },
        {
            Question:"What is the purpose of the 'using' statement in C#?",
            AnswerText:[
                {Answer:"To import namespaces",isCorrect:true},
                {Answer:"To define a class",isCorrect:false},
                {Answer:"To declare variables",isCorrect:false},
                {Answer:"To create objects",isCorrect:false}
            ]
        },{
            Question:"What is the output of the following code?\n\nconsole.log(1 + '1');",
            AnswerText:[
                {Answer:"11",isCorrect:true},
                {Answer:"2",isCorrect:false},
                {Answer:"undefined",isCorrect:false},
                {Answer:"null",isCorrect:false}
            ]
        }
    ]

    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)
    const [showScore,setShowScore]=useState(0)


   const  checkAnswer=(isCorrect)=>{


    if(isCorrect){
        setScore(score+1);
        
    
    }

    const nextQuestion=currentQuestion+1;
    if(nextQuestion<Questionbank.length){
        setCurrentQuestion(nextQuestion);
        
    }
    else{
        setShowScore(true);
    }
}
console.log(Questionbank)
  return (
    
    <div className="max-w-md mx-auto bg-white rounded p-6 mt-10 mb-10 shadow-2xl border-2 border-y-neutral-600">
        {
        showScore?(
            <div>
                <div>
                <div className="text-2xl font-bold font-mono">Your Score Is  :- <span className="text-red-600">{score}</span></div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mt-5 rounded"><Link to="/">back to home</Link></button>
            </div>
        ):(
            <>
                <div className="index">
                        <span>{currentQuestion}</span>/{Questionbank.length}
                </div> 
                <div className="questions">
                    <h1 className="question">{Questionbank[currentQuestion].Question}</h1>
                </div>
                <div className="answer">
                    
                   {Questionbank[currentQuestion].AnswerText.map((answer)=>(
                    // eslint-disable-next-line react/jsx-key
                    <div className="flex items-center">
                        <div>
                    {/* <input type="radio"/> */}
                    <input type="radio" onClick={()=>checkAnswer(answer.isCorrect)}/>&nbsp;{answer.Answer}
                    {/* </input> */}
                    </div>
                   </div>
                   ))}
                </div>
           </>
        )
    }




{/* 
<div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
    <h2 className="text-lg font-semibold mb-4">{Questionbank[currentQuestion].Question}</h2>
    <div className="space-y-2">
      <label htmlFor="option1" className="flex items-center">
        <input type="radio" id="option1" name="answer" className="mr-2" value="paris"/>
        {Questionbank[currentQuestion].AnswerText.map((answer)=>(
                    // eslint-disable-next-line react/jsx-key
                    <button onClick={()=>checkAnswer(answer.isCorrect)}>{answer.Answer}</button>
                   ))}
      </label>
      <label htmlFor="option2" className="flex items-center">
        <input type="radio" id="option2" name="answer" className="mr-2" value="berlin"/>
        <span className="text-sm">Berlin</span>
      </label>
      <label htmlFor="option3" className="flex items-center">
        <input type="radio" id="option3" name="answer" className="mr-2" value="london"/>
        <span className="text-sm">London</span>
      </label>
      <label htmlFor="option4" className="flex items-center">
        <input type="radio" id="option4" name="answer" className="mr-2" value="rome"/>
        <span className="text-sm">Rome</span>
      </label>
    </div>
  </div> */}




    </div>
  )

}
