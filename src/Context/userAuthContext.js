import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [loggedin, setLoggedin] = useState(false);

//   const navigate = useNavigate();

  const handleLogin = () => {
    if (sessionStorage.getItem("user")) {
      setLoggedin(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    setLoggedin(false);
    // navigate("/main/login");
  };
  return (
    <UserContext.Provider
      value={{ loggedin, setLoggedin, handleLogin, handleLogout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
