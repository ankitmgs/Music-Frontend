import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/userAuthContext";
import "../../CSS/toggleBar.css";

const Header = () => {
  const { loggedin, handleLogin, handleLogout } = useContext(UserContext);

  return (
    <>
      <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              className="overflow-hidden pt-0"
              data-v-271253ee=""
            >
              <section className="" style={{ paddingBottom: 1 }}>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-2">
                  {/* Container wrapper */}
                  <div className="container-fluid">
                    <div className="d-flex">
                      {/* Toggle button */}
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                      </button>
                      {/* Navbar brand */}
                      <a className="navbar-brand ms-3">
                        {/* <i
                          className="fas fa-gem text-primary"
                          aria-controls="#picker-editor"
                        /> */}
                      </a>
                    </div>
                    {/* Collapsible wrapper */}
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      {/* Left links */}
                      {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                          <NavLink
                            className="nav-link hover-underline-animation"
                            to="/main/home"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link hover-underline-animation"
                            to="/main/contactus"
                          >
                            Contact
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link hover-underline-animation"
                            to="/main/artistlogin"
                          >
                            Artist Login
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            className="nav-link hover-underline-animation"
                            to="/main/artistsignup"
                          >
                            Artist Signup
                          </NavLink>
                        </li>
                      </ul> */}
                      {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */} {/* Right elements */}
                    <div className="d-flex align-items-center">
                      <>
                        {" "}
                        {/* <div className="toggleWrapper">
                          <input type="checkbox" className="dn" id="dn" />
                          <label htmlFor="dn" className="toggle">
                            <span className="toggle__handler">
                              <span className="crater crater--1"></span>
                              
                            </span>
                            <span className="star star--1"></span>
                            <span className="star star--2"></span>
                            <span className="star star--3"></span>
                            <span className="star star--4"></span>
                            <span className="star star--5"></span>
                            <span className="star star--6"></span>
                          </label>
                        </div> */}
                      </>

                      {loggedin ? (
                        <button className="btn btn-danger">Logout</button>
                      ) : (
                        <>
                          {" "}
                          <NavLink to="/main/login">
                            <button
                              type="button"
                              className="btn  btn-link px-3 mb-1 me-2"
                              aria-controls="#picker-editor"
                            >
                              Login
                            </button>
                          </NavLink>
                          <NavLink to="/main/signup">
                            <button
                              type="button"
                              className="btn  btn-primary mb-1 me-lg-3"
                              aria-controls="#picker-editor"
                            >
                              Sign up
                            </button>
                          </NavLink>
                        </>
                      )}
                    </div>
                    {/* Right elements */}
                  </div>
                  {/* Container wrapper */}
                </nav>
                {/* Navbar */}
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
