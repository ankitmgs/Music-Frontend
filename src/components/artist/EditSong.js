import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const fileTypes = ["MP3", "WAV"];

const EditSong = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const { songid } = useParams();

  const [uploadForm, setUploadForm] = useState(null);
  const [loading, setLoading] = useState(false);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("artist"))
  );
  const handleChange = (file) => {
    setFile(file);
  };
  const navigate = useNavigate();
  const url = app_config.api_url;

  const getSongById = () => {
    setLoading(true);
    console.log("song id ye hai", songid);
    fetch(url + "/music/getbyid/" + songid)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUploadForm(data);
        setLoading(false);
        console.log("upload form initial", uploadForm);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSongById();
  }, []);

  const uploadFile = (file) => {
    // console.log(files);
    // const file = files[0];
    setFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setImage(file.name);
    fd.append("myfile", file);
    fetch(url + "/util/uploadthumbnail", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("Thumbnail uploaded");
      }
    });
  };

  const UploadSubmit = (formdata) => {
    formdata.musicfile = file;
    formdata.thumbnail = image;
    console.log("hello", formdata);
    fetch(url + "/music/update/" + songid, {
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
          navigate("/artist/manageSongs");
        }
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {!loading && uploadForm && (
        <Formik initialValues={uploadForm} onSubmit={UploadSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="card">
                  <h3 className="d-flex justify-content-center">Edit Song</h3>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 ">
                        <textarea
                          className="form-control mb-4"
                          id="title"
                          value={values.title}
                          onChange={handleChange}
                          rows="2"
                          placeholder="Song Title"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            className="form-control mb-4"
                            placeholder="Composer Name"
                            id="composer"
                            value={values.composer}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            className="form-control mb-4"
                            placeholder="Producer Name"
                            id="producer"
                            value={values.producer}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            className="form-control mb-4"
                            placeholder="Writer Name"
                            id="writer"
                            value={values.writer}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            className="form-control mb-4"
                            placeholder="Contributor"
                            id="contibutor"
                            value={values.contibutor}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            className="form-control mb-4"
                            placeholder="Language"
                            id="language"
                            value={values.language}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <textarea
                            className="form-control mb-4 mb-4"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            rows="2"
                            placeholder="Description"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                      <button type="submit" className="btn btn-primary w-50">
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

export default EditSong;
