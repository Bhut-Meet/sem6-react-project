// import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useLocation } from 'react-router-dom';

const UserProfile = () => {

  const location = useLocation()

//   useEffect(()=> {
//     axios.get('http://localhost:3001')
//     .then(result => setUsers(result.data))
//     .catch(err => console.log(err))
// },[])

const mystyle = {
  width: "auto",
  height: "auto",
  // color: "white",
  // backgroundColor: "DodgerBlue",
  // padding: "10px",
  // fontFamily: "Arial"
  padding: "20px",
  backgroundColor:" #fff",
  boxShadow: "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"
};
  return (
      
<>
      <div className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor:"#fafafa"}}>
      <div className="card p-4"  style={mystyle}>
        <div>
          {/* Your content goes here */}
          <h2>User Profile</h2>
          {/* <div>Your name is :- {location.state.name}</div> */}
          <div>Your email is :- {location.state.email}</div>
           <div>Your Password is :-  {location.state.id}</div>
        </div>
        <br />
      </div>
    </div>
    </>
  );
};

export default UserProfile;
