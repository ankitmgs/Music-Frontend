import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBFile,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Form, Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ArtistSignup = () => {
  const url = app_config.api_url;
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const signupForm = {
    email: "",
    name: "",
    avatar: "",
    gender: "",
    phone: "",
    password: "",
    cpassword: "",
    awards: "",
    concerts: "",
    website: "",
    twitter: "",
    instagram: "",
    facebook: "",
    createdAt: "",
  };

  const uploadAvatar = (e) => {
    const fd = new FormData();
    // setAvatar(file.name);
    // fd.append("myfile", file);
    fetch(url + "/util/uploadartistavatar", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("Thumbnail uploaded");
      }
    });
  };

  const SignupSubmit = (formdata) => {
    setLoading(true);
    fetch(url + "/artist/register", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully",
          });
          navigate("/main/artistlogin");
        } else if (res.status === 409) {
          Swal.fire({
            icon: "warning",
            title: "Email already exists !",
            // text: "Email already exist !!",
          });
        } else if (res.status === 401) {
          Swal.fire({
            icon: "warning",
            // title: "Success",
            title: "Password not matching !",
          });
        } else if (res.status === 422) {
          Swal.fire({
            icon: "warning",
            // title: "Success",
            title: "Enter all the given fields !",
          });
        }
        setLoading(false);
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <MDBContainer
              fluid
              className="d-flex align-items-center justify-content-center bg-image"
              style={{
                backgroundImage:
                  "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
              }}
            >
              <div className="mask gradient-custom-3"></div>
              <MDBCard className="m-5 w-100" style={{ maxWidth: "600px" }}>
                <MDBCardBody className="px-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Artist Register
                  </h2>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Your Name"
                    size="lg"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    type="text"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Your Email"
                    size="lg"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    type="email"
                  />
                  <select
                    id="gender"
                    className="form-select mb-4"
                    label="Gender"
                    aria-label="Default select example"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <option selected value="Male">
                      Male
                    </option>
                    <option value="Female">Female</option>
                  </select>

                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    size="lg"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    type="password"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Repeat your password"
                    size="lg"
                    id="cpassword"
                    value={values.cpassword}
                    onChange={handleChange}
                    type="password"
                  />

                  <button
                    className="btn btn-primary mb-4 w-100 gradient-custom-4"
                    size="lg"
                  >
                    Register
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </form>
        )}
      </Formik>
      {/* <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <MDBContainer fluid className="h-custom">
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol col="12" className="m-5">
                  <MDBCard
                    className="card-registration card-registration-2"
                    style={{ borderRadius: "15px" }}
                  >
                    <MDBCardBody className="p-0">
                      <MDBRow>
                        <MDBCol
                          md="6"
                          className="bg-indigo p-5"
                          style={{
                            backgroundColor: "black",
                            borderRadius: "0 15px 15px 0 ",
                          }}
                        >
                          <h3
                            className="fw-normal mb-5 text-white"
                            style={{ color: "#4835d4" }}
                          >
                            Contact Details
                          </h3>
                          <MDBInput
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            id="email"
                            label="Email"
                            size="lg"
                            type="email"
                            style={{ color: "white" }}
                            value={values.email}
                            onChange={handleChange}
                          />
                          <MDBInput
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            id="name"
                            label="Name"
                            size="lg"
                            type="text"
                            style={{ color: "white" }}
                            value={values.name}
                            onChange={handleChange}
                          />
     

                          <select
                            id="gender"
                            className="form-select mb-4"
                            label="Gender"
                            aria-label="Default select example"
                            value={values.gender}
                            onChange={handleChange}
                          >
                            <option selected value="Male">
                              Male
                            </option>
                            <option value="Female">Female</option>
                          </select>

                          <MDBInput
                            style={{ color: "white" }}
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            id="password"
                            label="Password"
                            size="lg"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                          <MDBInput
                            style={{ color: "white" }}
                            wrapperClass="mb-4"
                            labelClass="text-white"
                            id="cpassword"
                            label="Confirm Password"
                            size="lg"
                            type="password"
                            value={values.cpassword}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-primary"
                            color="light"
                            size="lg"
                            type="submit"
                          >
                            {loading ? <CircularProgress /> : "Register"}
                          </button>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </form>
        )}
      </Formik> */}
      {/* <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="container">
              <div className="row py-5" style={{backdropFilter: "blur(5px)"}}>
                <div
                  className="col-md-5"
                  style={{
                    border: "1px solid black",
                    borderRadius: "15px 0 0 15px",
                  }}
                >
                  Left
                </div>
                <div
                  className="col-md-7"
                  style={{
                    border: "1px solid black",
                    borderRadius: "0 15px 15px 0",
                  }}
                >
                  <div className="m-3">
                    <MDBInput
                      wrapperClass="mb-4"
                      labelClass="text-white"
                      id="email"
                      label="Email"
                      size="lg"
                      type="email"
                      style={{ color: "white" }}
                      // value={values.email}
                      // onChange={handleChange}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      labelClass="text-white"
                      id="name"
                      label="Name"
                      size="lg"
                      type="text"
                      style={{ color: "white" }}
                      // value={values.name}
                      // onChange={handleChange}
                    />
                    <label style={{ color: "white" }}>
                      Upload Avatar Image
                    </label>
                    <MDBFile
                      className="mb-4"
                      // value={values.avatar}
                      // onChange={handleChange}
                      id="avatar"
                    />

                    <select
                      id="gender"
                      className="form-select mb-4"
                      label="Gender"
                      aria-label="Default select example"
                      // value={values.gender}
                      // onChange={handleChange}
                    >
                      <option selected value="1">
                        Male
                      </option>
                      <option value="2">Female</option>
                    </select>

                    <MDBInput
                      style={{ color: "white" }}
                      wrapperClass="mb-4"
                      labelClass="text-white"
                      id="password"
                      label="Password"
                      size="lg"
                      type="password"
                      // value={values.password}
                      // onChange={handleChange}
                    />
                    <MDBInput
                      style={{ color: "white" }}
                      wrapperClass="mb-4"
                      labelClass="text-white"
                      id="cpassword"
                      label="Confirm Password"
                      size="lg"
                      type="password"
                      // value={values.cpassword}
                      // onChange={handleChange}
                    />
                    <button
                      className="btn btn-primary"
                      color="light"
                      size="lg"
                      type="submit"
                    >
                      {loading ? <CircularProgress /> : "Register"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik> */}
    </>
  );
};

export default ArtistSignup;
