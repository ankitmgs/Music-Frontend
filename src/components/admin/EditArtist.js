import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import Loader from "../utils/loader";

const EditArtist = () => {
  const [isloading, setIsloading] = useState(true);
  const {artistId} = useParams();
  // const [initialForm, setInitialForm] = useState(JSON.parse(sessionStorage.getItem("admin")));
  const [initialForm, setInitialForm] = useState(null);
  const url = app_config.api_url;


  console.log("artist id", artistId);

  const getArtistbyId = () => {
    console.log("artist id ye hai", artistId);
    setIsloading(false);
    fetch(url + "/artist/getbyid/" + artistId)
      .then((res) => {
        console.log(res.status);
        console.log("fetch chal gaya");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInitialForm(data);
        console.log("asdf",data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    getArtistbyId();
  }, []);

  const updateSubmit = (formdata) => {
    fetch(url + "/artist/update/" + artistId, {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Music File Updated Successfully !!",
          });
          // navigate("/artist/manageSongs");
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {isloading && initialForm ? (
        <Loader />
      ) : (
        <Formik initialValues={initialForm} onSubmit={updateSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="card">
                  <div className="container">
                    <h3 className="d-flex justify-content-center">
                      Edit Artist Details
                    </h3>
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          placeholder="Edit Name"
                          id="name" 
                          value={values.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-12">
                        <input
                          className="form-control"
                          placeholder="Edit Email"
                          id="email"
                          value={values.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-12">
                        {/* <input
                          className="form-control"
                          placeholder="Edit Gender"
                          id=""
                          // value={values.gender}
                          onChange={handleChange}
                        /> */}
                        <select className="form-control" id="gender" name="gender" value="initialForm.gender">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className=" btn btn-secondary w-50 my-3">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default EditArtist;
