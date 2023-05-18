import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import app_config from "../../config";
import "../utils/SlideBar.css";

const SliderArtist = () => {
  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("artist"))
  );
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
            src={
              currentUser.avatar
                ? url + "/" + currentUser.avatar
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="avatar"
          />
        </div>
        <div className="d-flex justify-content-center m-0">
          <p>{currentUser.name}</p>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to="/artist/artistprofile">
            <button className="btn btn-primary m-0">Profile</button>
          </NavLink>
        </div>
        <div className="d-flex flex-column mt-5" style={{ gap: "0.5rem" }}>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/artist/artistdashboard"
          >
            <i className="fa-solid fa-chart-line pr-2" />
            Dashboard
          </NavLink>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/artist/uploads"
          >
            <i className="fas fa-regular fa-cloud-arrow-up pr-2" />
            Upload
          </NavLink>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/artist/manageSongs"
          >
            <i className="fa-solid fa-list-check pr-2" /> Manage Song
          </NavLink>
        </div>
      </Menu>
    </div>
  );
};

export default SliderArtist;
