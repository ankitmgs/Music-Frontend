import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Edit from "@mui/icons-material/Edit";
import MusicCard from "../../props/MusicCard";
import app_config from "../../config";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        marginRight: "2rem",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

const ArtistProfile = () => {
  const url = app_config.api_url;

  const [selImage, setSelImage] = useState("");

  const [musicListArray, setMusicListArray] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("artist"))
  );

  const getMusic = async () => {
    console.log("fghjknbv", currentUser);
    const response = await fetch(url + "/music/getall");
    const data = await response.json();
    console.log(data);
    setMusicListArray(data);
  };

  const updateProfile = async (dataToUpdate) => {
    const res = await fetch(url + "/artist/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(dataToUpdate),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    sessionStorage.setItem("artist", JSON.stringify(data));
    setCurrentUser(data);
  };

  useEffect(() => {
    getMusic();
  }, []);

  const displayMusic = () => {
    return musicListArray.map((music) => (
      <div>
        <MusicCard
          singer={music.artist}
          song={music.title}
          img={music.thumbnail}
        />
      </div>
    ));
  };

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then(async (res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        await updateProfile({ avatar: file.name });
      }
    });
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="#">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={
                      currentUser.avatar
                        ? url + "/" + currentUser.avatar
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    alt="avatar"
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                    fluid
                  />
                  <p className="text-muted mb-1">{currentUser.name}</p>
                  <p className="text-muted mb-4">Mumbai, INDIA</p>
                  <div className="d-flex justify-content-center mb-2">
                    <label
                      htmlFor="image"
                      style={{
                        zIndex: 1,
                        display: "block",
                        textAlign: "center",
                        padding: 5,
                        backgroundColor: "white",
                        border: "2px solid black",
                        borderRadius: 3,
                        color: "black",
                      }}
                    >
                      Edit profile
                    </label>
                    <input
                      type="file"
                      hidden
                      id="image"
                      onChange={uploadFile}
                    />
                  </div>
                </MDBCardBody>
              </MDBCard>

              {/* <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <div className="d-flex justify-content-end m-2">
                    <div
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <Edit />
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Add Websites
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Websites Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Twitter Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Insatgram Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter facebook Link"
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon fas icon="globe fa-lg text-warning" />
                      <a href="#">dldlblefblefw</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <a href="#">@mdbootstrap</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <a href="#">mdbootstrap</a>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <MDBIcon
                        fab
                        icon="facebook fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <a href="#">mdbootstrap</a>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard> */}
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <div className="d-flex justify-content-end">
                    <div
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      <Edit />
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              Basic Details
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Websites Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Twitter Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter Insatgram Link"
                            />
                            <input
                              className="form-control mt-3"
                              type="url"
                              placeholder="Enter facebook Link"
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {currentUser.name}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Collaboration Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {currentUser.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        (097) 234-5678
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Awards</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">lorem</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Concerts</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Bay Area, San Francisco, CA
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default ArtistProfile;
