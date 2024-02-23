import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <div>
      <h1>My React App</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default NewHeader;