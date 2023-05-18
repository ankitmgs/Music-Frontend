import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik } from "formik";

const AdminLogin = () => {
  const url = app_config.api_url;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const adminForm = {
    email: "",
    password: "",
  };

  const LoginSubmit = (formdata) => {
    console.log(formdata);
    setLoading(true);

    const reqOpt = {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(url + "/admin/login", reqOpt).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have loggedin successfully!",
        });
        res
          .json()
          .then((data) => {
            console.log(data);
            sessionStorage.setItem("admin", JSON.stringify(data));
            navigate("/admin/adminDashboard");
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Email or password is incorrect!",
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Failed",
          text: "Something Error !!",
        });
      }
      setLoading(false);
      return res.json();
    });
  };

  return (
    <div>
      <Formik initialValues={adminForm} onSubmit={LoginSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <MDBContainer fluid>
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12">
                  <MDBCard
                    className="bg-dark text-white my-5 mx-auto"
                    style={{ borderRadius: "1rem", maxWidth: "400px" }}
                  >
                    <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                      <h2 className="fw-bold mb-2 text-uppercase">Admin</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Email address"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        type="email"
                        size="lg"
                      />
                      <MDBInput
                        wrapperClass="mb-4 mx-5 w-100"
                        labelClass="text-white"
                        label="Password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        type="password"
                        size="lg"
                      />

                      <p className="small mb-3 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p>
                      <button
                        outline
                        className=" btn btn-primary mx-2 px-5"
                        color="white"
                        size="lg"
                        type="submit"
                      >
                        Login
                      </button>

                      <div className="d-flex flex-row mt-3 mb-5">
                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="facebook-f" size="lg" />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="twitter" size="lg" />
                        </MDBBtn>

                        <MDBBtn
                          tag="a"
                          color="none"
                          className="m-3"
                          style={{ color: "white" }}
                        >
                          <MDBIcon fab icon="google" size="lg" />
                        </MDBBtn>
                      </div>

                      <div>
                        <p className="mb-0">
                          Don't have an account?{" "}
                          <a href="#!" className="text-white-50 fw-bold">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AdminLogin;
