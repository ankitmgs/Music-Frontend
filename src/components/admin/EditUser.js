import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const EditUser = () => {
  const [initialForm, setInitialForm] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const url = app_config.api_url;
  const  userId  = useParams();

  const getUserData = () => {
    setIsloading(true);
    console.log("user id ye hai", userId);
    fetch(url + "/user/getbyid/" + userId)
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setInitialForm(data);
        setIsloading(false);
        console.log("upload form initial", initialForm);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const updateSubmit = (formdata) => {
    console.log("hello", formdata);
    fetch(url + "/user/update/" + userId, {
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
  }

  return <div>EditUser</div>;
};

export default EditUser;
