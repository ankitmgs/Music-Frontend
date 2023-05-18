import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import app_config from "../../config";
import "../utils/SlideBar.css";

const SliderUser = () => {

  const url = app_config.api_url;
  const [currentuserInSession, setCurrentuserInSession] = useState(JSON.parse(sessionStorage.getItem("user")))
  return (
    <div>
      <Menu>
        <div className="d-flex justify-content-center">
          <img
            style={{
              borderRadius: "50%",
              width: "10rem",
              height: "10rem",
              objectFit: "cover",
            }}
            src={currentuserInSession.avatar ? url+ "/"+currentuserInSession.avatar : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            alt="avatar"
          />
        </div>
        <div className="d-flex justify-content-center m-0">
          <p>{currentuserInSession.Fname}{" "}{currentuserInSession.Lname}</p>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to="/user/profile">
            <button className="btn btn-primary m-0">Profile</button>
          </NavLink>
        </div>
        <div className="d-flex flex-column mt-5" style={{ gap: "0.5rem" }}>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/user/home"
          >
            <i className="fa-solid fa-house pr-2" />Home
          </NavLink>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="#"
          >
            <i className="fas fa-thin fa-magnifying-glass pr-2" />Search
          </NavLink>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="#"
          >
            <i className="fa-sharp fa-solid fa-heart pr-2" />Favourites
          </NavLink>
        </div>
      </Menu>
    </div>
  );
};

export default SliderUser;
