import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { TableCell } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Loader from "../utils/loader";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const AdminManageSongs = () => {
  const url = app_config.api_url;
  const [songArray, setSongArray] = useState([]);
  const [isloading, setIsloading] = useState(true);

  const deleteSongs = (id) => {
    fetch(url + "/music/delete/" + id, {
      method: "Delete",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Song Deleted");
          Swal.fire({
            icon: "success",
            title: "Song Deleted !!",
          });
          getSongFromBackend();
          return res.json();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getSongFromBackend = async () => {
    const response = await fetch(url + "/music/getall/");
    const data = await response.json();
    setSongArray(data);
    console.log(data);
    setIsloading(false);
  };

  useEffect(() => {
    getSongFromBackend();
  }, []);

  return (
    <div>
      {" "}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "#80808054" }}>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Composer</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Delete</TableCell>
              {/* <TableCell>Actions</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {isloading ? (
              <Loader />
            ) : (
              songArray.map((song) => {
                return (
                  <>
                    <TableRow
                      key="ghjk"
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img
                          style={{ width: "45px", height: "45px" }}
                          src={url + "/" + song.thumbnail}
                          className="rounded-circle mr-4"
                        />
                        {song.title}
                      </TableCell>
                      <TableCell>{song.artist.name}</TableCell>
                      <TableCell>{song.composer}</TableCell>
                      <TableCell>{song.language}</TableCell>

                      <TableCell>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteSongs(song._id);
                          }}
                        >
                          <i className="fa-solid fa-trash fa-lg"></i>
                        </button>
                      </TableCell>
                      {/* <TableCell>
                        <NavLink
                          to={"/admin/edit/" + song._id}
                          type="button"
                          className="btn btn-secondary"
                        >
                          Edit
                        </NavLink>
                      </TableCell> */}
                    </TableRow>
                  </>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminManageSongs;
