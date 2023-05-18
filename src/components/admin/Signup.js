import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Formik } from "formik";

const AdminSignup = () => {
  const url = app_config.api_url;
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const signupForm = {
    email: "",
    name: "",
    avatar: "",
    gender: "",
    password: "",
  };

  // const uploadAvatar = (e) => {
  //   const fd = new FormData();
  //   // setAvatar(file.name);
  //   // fd.append("myfile", file);
  //   fetch(url + "/util/uploadartistavatar", {
  //     method: "POST",
  //     body: fd,
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       console.log("Thumbnail uploaded");
  //     }
  //   });
  // };

  const SignupSubmit = (formdata) => {
    setLoading(true);
    fetch(url + "/admin/register", {
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
          navigate("/admin/signup");
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
            <MDBContainer
              fluid
              className="d-flex align-items-center justify-content-center bg-image"
              style={{
                backgroundImage:
                  "url(https://png.pngtree.com/thumb_back/fh260/background/20220522/pngtree-server-farm-banner-system-administration-image_1374995.jpg)",
              }}
            >
              <div className="mask gradient-custom-3"></div>
              <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
                <MDBCardBody className="px-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Admin Account
                  </h2>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Your Name"
                    size="lg"
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Your Email"
                    size="lg"
                    type="email"
                    id="email"
                    value={values.email}
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
                    wrapperClass="mb-4"
                    label="Password"
                    size="lg"
                    type="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />

                  <button type="submit" className="btn btn-primary mb-4 w-100 gradient-custom-4" size="lg">
                    Register
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AdminSignup;
