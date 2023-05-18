import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/userAuthContext";

const Header = () => {
  const { loggedin, handleLogin, handleLogout } = useContext(UserContext);

  return (
    <div>
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
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-2">
                  <div className="container-fluid">
                    <div className="d-flex">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <i className="fas fa-bars" />
                      </button>
                      <NavLink className="navbar-brand ms-3" to="/user/home">
                  
                        User Header
                      </NavLink>
                    </div>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                     
                    </div>
                    <div className="d-flex align-items-center">
                  
                      {loggedin ? (<>
                        <button onClick={handleLogout} className="btn btn-danger">Log Out</button>
                        </>
                      ) : (
                        <div>
                          <NavLink to="/main/login">
                            <button
                              type="button"
                              className="btn  btn-primary mb-1 me-lg-3"
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
                              Register
                            </button>
                          </NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                </nav>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
