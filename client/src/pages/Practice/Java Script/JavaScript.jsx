// import React from 'react'

import { useEffect, useState } from "react"

export default function JavaScript() {

    const [users,setUsers] = useState([]);

    const getUsers = async()=>{
        // const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const response = await fetch('../../src/pages/Practice/Java Script/JavaScript.json');
        setUsers(await response.json());
        // const data = await response.json();
        // console.log(data)
    }

    useEffect(()=>{
        getUsers();
    },[]);
  return (
    <>
            {
                    users.map((curElement)=>{
                        return(
                            <>
                                        <div className="precontainer">
                                            <h1 className="id">Qn: {curElement.id}</h1>
                                            <h2>{curElement.question}</h2>
                                                    <div className="prequestion">
                                                        <ul className="preopation">
                                                        <li type="A">{curElement.options1}</li>
                                                        <li type="A">{curElement.options2}</li>
                                                        <li type="A">{curElement.options3}</li>
                                                        <li type="A">{curElement.options4}</li>
                                                        </ul>
                                                    </div>

                                                    <h2>Answer:</h2>
                                                    <div className="preanswer">
                                                        <p>{curElement.answer}</p>
                                                    </div>
                                        </div>
                            </>
                        )
                    })
            }
    </>
  )
}
