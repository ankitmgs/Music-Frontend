import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const ArtistAuth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("artist"))
  );

  if (currentUser !== null) {
    return children;
  } else {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "You need to login",
    });
    return <Navigate to="/main/artistlogin" />;
  }
};

export default ArtistAuth;
