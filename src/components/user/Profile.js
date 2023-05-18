import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "../../CSS/UserProfile.css"
import app_config from "../../config";


const UserProfile = () => {
  const url = app_config.api_url;

  const [userDataArray, setUserDataArray] = useState([])

  const [sessionUserData, setSessionUserData] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  )
  console.log("sessiondata", sessionUserData)


  const updateProfile = async(dataToUpdate)=>{
    const res = await fetch( url +"/user/update/" +sessionUserData._id,{
      method: "PUT",
      body:JSON.stringify(dataToUpdate),
      headers:{
        "Content-Type": "application/json"
      },
    });
    console.log(res.status);
    const data =await res.json();
    console.log(data);
    sessionUserData.setItem("user" ,JSON.stringify(data));
    setSessionUserData(data);
  }

  //   const getUserData = async () => {
  //    const res = await fetch(url + "/user/getbyid/" +sessionUserData._id);
  //    const data = await res.json()
  //    console.log(data);
  //   //  setUserDataArray(data);
  //   }
  // useEffect(()=>{
  //   getUserData();
  // },[])


  const navigate = useNavigate();
  return (

    <div className="user-profile-top mt-5">

      {sessionUserData == null ? <h1>Login First</h1> : <>
        <div className='container' >
          <div className='card user-profile-card'>
            <div className='d-flex justify-content-center  '>
              <div>
                <img className='avatar-img ' src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg" />
                <div>
                  {/* <h1 className='d-flex justify-content-center'>{sessionUserData.Fname }{" "}{sessionUserData.Lname}</h1> */}
                  <p className='d-flex justify-content-center'>{sessionUserData.email}</p>
                  <div className='d-flex justify-content-center'>
                    <button className=' btn btn-primary mb-5'>Edit Avatar</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='' style={{ display: "flex" }}>
              <p className='w-50 m-0' style={{ alignItems: "center" }}>
                UserName
              </p>
              <p>Rehnuma Bano</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{ display: "flex" }}>
              <p className='w-50 m-0' style={{ alignItems: "center" }}>
                Email
              </p>
              <p>demo@gmail.com</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{ display: "flex" }}>
              <p className='w-50 m-0' style={{ alignItems: "center" }}>
                Date Of Birth
              </p>
              <p>{sessionUserData.DOB}</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{ display: "flex" }}>
              <p className='w-50 m-0' style={{ alignItems: "center" }}>
                Mobile No.
              </p>
              <p>{sessionUserData.phone}</p>
            </div>
            <hr className='mt-0' />
            <div className='' style={{ display: "flex" }}>
              <p className='w-50 m-0' style={{ alignItems: "center" }}>
                Country
              </p>
              <p>India</p>
            </div>
            <hr className='mt-0' />
            <NavLink to={"/user/editprofile/" + sessionUserData._id}>
              <button className="btn btn-primary" >
                Edit  Profile
              </button>
            </NavLink>

          </div>
        </div>
      </>}

    </div>

  )
}

export default UserProfile