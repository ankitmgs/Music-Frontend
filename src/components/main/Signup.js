import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const url = app_config.api_url;
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const signupForm = {
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
    DOB: "",
    gender: "",
    country: "",
    avatar: "",
    password: "",
    cpassword: "",
    country: "",
    avatar: "",
  };

  const SignupSubmit = (formdata) => {
    console.log(formdata);
    // return;
    setLoading(true);
    fetch(url + "/user/register", {
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
          navigate("/main/login");
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
    <div>
      <Formik initialValues={signupForm} onSubmit={SignupSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <MDBContainer fluid className="bg-dark">
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol>
                  <MDBCard className="my-4">
                    <MDBRow className="g-0">
                      <MDBCol md="6" className="d-none d-md-block">
                        <MDBCardImage
                          src="https://images.unsplash.com/photo-1567787609897-efa3625dd22d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80"
                          alt="Sample photo"
                          className="rounded-start"
                          fluid
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                          <h3 className="mb-5 text-uppercase fw-bold">
                            Welcome to Music Community
                          </h3>

                          <MDBRow>
                            <MDBCol md="6">
                              <MDBInput
                                wrapperClass="mb-4"
                                label="First Name"
                                size="lg"
                                type="text"
                                id="Fname"
                                value={values.Fname}
                                onChange={handleChange}
                              />
                            </MDBCol>

                            <MDBCol md="6">
                              <MDBInput
                                wrapperClass="mb-4"
                                label="Last Name"
                                size="lg"
                                type="text"
                                id="Lname"
                                value={values.Lname}
                                onChange={handleChange}
                              />
                            </MDBCol>
                          </MDBRow>

                          <MDBInput
                            wrapperClass="mb-4"
                            label="Email"
                            size="lg"
                            type="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          <MDBInput
                            wrapperClass="mb-4"
                            label="DOB"
                            size="lg"
                            type="date"
                            id="DOB"
                            value={values.DOB}
                            onChange={handleChange}
                          />
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Phone Number"
                            size="lg"
                            type="tel"
                            id="phone"
                            maxLength={10}
                            // pattern="[0-9]{4}-[0-9]{6}"
                            value={values.phone}
                            onChange={handleChange}
                          />

                          <div className="d-md-flex ustify-content-start align-items-center mb-4">
                            <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                            <MDBRadio
                              name="inlineRadio"
                              value="option1"
                              label="Female"
                              inline
                              id="gender1"
                              // value={values.gender}
                              onChange={handleChange}
                            />
                            <MDBRadio
                              name="inlineRadio"
                              value="option2"
                              label="Male"
                              inline
                              id="gender2"
                              // value={values.gender}
                              onChange={handleChange}
                            />
                            <MDBRadio
                              name="inlineRadio"
                              value="option3"
                              label="Other"
                              inline
                              id="gender"
                              // value={values.gender}
                              onChange={handleChange}
                            />
                          </div>

                          <MDBInput
                            wrapperClass="mb-4"
                            label="Password"
                            size="lg"
                            type="password"
                            id="password"
                            autoComplete="on"
                            value={values.password}
                            onChange={handleChange}
                          />
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Confirm Password"
                            size="lg"
                            type="password"
                            id="cpassword"
                            autoComplete="on"
                            value={values.cpassword}
                            onChange={handleChange}
                          />

                          <div className="d-flex justify-content-end pt-3">
                            <MDBBtn color="light" size="lg">
                              Reset all
                            </MDBBtn>
                            <button
                              className="btn btn-primary ms-2"
                              color="warning"
                              size="lg"
                              type="submit"
                            >
                              {loading ? <CircularProgress /> : "Submit"}
                            </button>
                          </div>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
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

export default Signup;
