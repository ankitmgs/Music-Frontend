import React, { useState } from "react";
import { stack as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "../utils/SlideBar.css";
import Album from "@mui/icons-material/Album";
import app_config from "../../config";

const SliderAdmin = () => {
  const url = app_config.api_url;
  const [currentAdminfromSession, setCurrentAdminfromSession] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
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
            // src=""
            src={
              currentAdminfromSession.avatar
                ? url + "/" + currentAdminfromSession.avatar
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="avatar"
          />
        </div>
        <div className="d-flex justify-content-center m-0">
          {currentAdminfromSession.name ?  (currentAdminfromSession.name): (<p>Admin Name</p>)}
          {/* <p>Name</p> */}
        </div>
        <div className="d-flex justify-content-center">
          <NavLink to="/admin/profile">
            <button className="btn btn-primary m-0">Profile</button>
          </NavLink>
        </div>
        <div className="d-flex flex-column mt-5" style={{ gap: "0.5rem" }}>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/adminDashboard"
          >
            <i className="fa-solid fa-chart-line pr-2" /> Dashboard
          </NavLink>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/manageUsers"
          >
            <i className="fas fa-thin fa-user pr-2" /> Manage User
          </NavLink>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/manageArtists"
          >
            <Album className="" /> Manage Artist
          </NavLink>
          <NavLink
            className="menu-item hover-underline-animation"
            style={{ textDecoration: "none", color: "white" }}
            to="/admin/manageSongs"
          >
            <i className="fa-solid fa-music pr-2" />
            Manage Song
          </NavLink>
        </div>
      </Menu>
    </div>
  );
};

export default SliderAdmin;
