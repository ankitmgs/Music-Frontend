import React, { useEffect, useState } from "react";
import Loader from "../utils/loader";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import app_config from "../../config";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const ManageArtist = () => {
  const [artistArray, setartistArray] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const url = app_config.api_url;

  const getDataFromBackend = async () => {
    const response = await fetch(url + "/artist/getall");
    const data = await response.json();
    console.log(data);
    setartistArray(data);
    setIsloading(false);
  };

  const deleteArtist = (id) => {
    const reqOt = {
      method: "DELETE",
    };
    fetch(url + "/artist/delete/" + id, reqOt)
      .then((res) => {
        if (res.status === 200) {
          console.log("Artist Deleted Successfully");
          Swal.fire({
            icon: "success",
            text: "Artist Delete",
          });
          getDataFromBackend();
          return res.json();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayArtists = () => {
    return artistArray.map((artist) => (
      <>
        <TableRow
          key={artist.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <img
              style={{ width: "45px", height: "45px" }}
              src={url + "/" + artist.avatar}
              className="rounded-circle mr-4"
            />
            {artist.name}
          </TableCell>
          <TableCell>{artist.email}</TableCell>
          <TableCell>
            <span className="badge badge-success rounded-pill d-inline">
              {artist.gender}
            </span>
          </TableCell>
          <TableCell>
            <button
              className="btn btn-danger"
              onClick={() => deleteArtist(artist._id)}
            >
              <i className="fa-solid fa-trash fa-lg" />
            </button>
          </TableCell>
          <TableCell>
            <NavLink to={"/admin/editArtist/"+artist._id}>
              <button type="button" className="btn btn-secondary">
                Edit
              </button>
            </NavLink>
          </TableCell>
        </TableRow>
      </>
    ));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#80808054" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{isloading ? <Loader /> : displayArtists()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageArtist;
